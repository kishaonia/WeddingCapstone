const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Comment, songRequest, Registry, Photo  } = require('../../db/models');
const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];
// Sign up





router.get('/', requireAuth, async (req, res, next) => {
    let users = await User.findAll({
        include: [
           
            {
                model: songRequest,
                attributes:['id', 'artist', 'songName']
             
            },
            {
                model: Photo,
                attributes: ['id', 'url']
               
            },
           
        ]
    })


    if (!users) {
        return res.json({
            "message": "Users could not be found",
            "status": 404
        })
    }
    let Users = [];
    users.forEach( user => {
        Users.push(user.toJSON())
    })

  res.json({Users})

} )

//list of registries


//Creating a registry for a logged in User
router.post('/:id/registries', requireAuth, async(req, res, next) => {
  let newRegistry;
  const { url, registryItem } = req.body;

  let findUser = await User.findByPk(req.user.id);

  if (!findUser) {
    return res.json({
      message: "User couldn't be found",
    });
  }

  let findRegistry = await Registry.findOne({
    where: {
      userId: req.user.id,
    },
  });

  if (findRegistry) {
    return res.json({
      message: "User already created a registry",
    });
  }

  newRegistry = await findUser.createRegistry({
    userId: req.user.id,
    url,
    registryItem,
  });

  res.json(newRegistry);
}
)

router.post(
    '/', validateSignup,
    async (req, res) => {
        const { email, username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({ email, username, hashedPassword });

        const safeUser = {
            id: user.id,
            email: user.email,
            username: user.username,
        };

        await setTokenCookie(res, safeUser);

        return res.json({
            user: safeUser
        });
    }
);

module.exports = router;
