const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Comment, songRequest, Registry, Photo, Like } = require('../../db/models');
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
                attributes:
                ['id', 'artist', 'songName']
             
            },
            {
                model: Photo,
                // attributes: ['id', 'url', 'description']
               
            },
            {
              model: Registry,
              attributes:['id']
            }
           
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

    Users.forEach(user => {
      user.Photos.forEach(photo => {
        if (photo) {
          user.photoId = photo.userId
        }
      })
    })

  res.json({Users})

} )

//list of registries


//Creating a registry for a logged in User
router.post('/:id/registries', requireAuth, async(req, res, next) => {
  let newRegistry;
  const { url, registryItem, like} = req.body;

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
    like,
    registryItem,
  });

  res.json(newRegistry);
}
)
//Creating Photo for Logged in User
router.post('/:id/photos', requireAuth, async(req, res, next) => {
  let newPhoto;
  const { url, description, like, file } = req.body;

  let findUser = await User.findByPk(req.user.id);

  if (!findUser) {
    return res.json({
      message: "User couldn't be found",
    });
  }

  let findPhoto = await Photo.findOne({
    where: {
      userId: req.user.id,
    },
  });

  if (findPhoto) {
    return res.json({
      message: "User already created a photo",
    });
  }

  newPhoto = await findUser.createPhoto({
    userId: req.user.id,
    url,
    description,
    like,
    file,
  });

  res.json(newPhoto);
}
)
// Creating File 

// router.post('/:id/files', requireAuth, async (req, res, next) => {
//   let newFile;
//   const { type, file } = req.body;

//   let findUser = await db.User.findByPk(req.user.id);

//   if (!findUser) {
//     return res.json({
//       message: "User couldn't be found",
//     });
//   }

//   const findFile = await db.File.findOne({
//     where: {
//       userId: req.user.id,
//     },
//   });

//   if (findFile) {
//     return res.json({
//       message: "User already created a file",
//     });
//   }

//   newFile = await db.File.create({
//     userId: req.user.id,
//     type,
//     file,
//   });

//   res.json(newFile);
// });


// //Creating songRequest for Logged in User
// router.post('/:id/songRequests', requireAuth, async(req, res, next) => {
//   let newSongRequest;
//   const { songName, artist, like } = req.body;

//   let findUser = await User.findByPk(req.user.id);

//   if (!findUser) {
//     return res.json({
//       message: "User couldn't be found",
//     });
//   }

  router.post('/:id/songrequests', requireAuth, async (req, res, next) => {
 let newSongRequest;
    const { songName, artist} = req.body;

    let findUser = await User.findByPk(req.user.id);

    if (!findUser) {
      return res.status(404).json({
        message: "User couldn't be found",
      });
    }

    const findSongRequest = await songRequest.findOne({
      where: {
        userId: req.user.id,
      },
    });

    if (findSongRequest) {
      return res.status(400).json({
        message: "User already created a request",
      });
    }

    newSongRequest = await findUser.createSongRequest({
      userId: req.user.id,
      songName,
      artist
});
  res.json(newSongRequest);
}
)


//     res.json(newSongRequest);
//   } catch (error) {
//     next(error);
//   }
// });

// res.json(newSongRequest);
// }
// )

router.post(
    '/', validateSignup,
    async (req, res) => {
        const {firstName, lastName, email, username, password } = req.body;
        const user = await User.create({ firstName, lastName, email, username, password });

        const safeUser = {
          id: user.id,
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        };

        await setTokenCookie(res, safeUser);

        return res.json({
            user: safeUser
        });
    }
);

module.exports = router;
