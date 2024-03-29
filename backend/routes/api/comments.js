const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo } = require("../../db/models");


// GET /comments
// router.get('/', async (req, res) => {
//   try {
//     const comments = await db.Comment.findAll();
//     res.json(comments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// POST /comments
// router.post('/', async (req, res) => {
//   try {
//     const { userId, registryId, comment } = req.body;
//     const newComment = await db.Comment.create({ userId, registryId, comment });
//     res.status(201).json(newComment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// GET /comments/:id
// router.get('/:id', async (req, res) => {
//   try {
//     const comment = await db.Comment.findByPk(req.params.id);
//     if (comment) {
//       res.json(comment);
//     } else {
//       res.status(404).json({ message: 'Comment not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


router.get('/', requireAuth, async (req, res, next) => {

  let comments = await Comment.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'lastName', 'firstName'],
      }
    ],
  });

if (!comments) {
  return res.json({
    message: "Comment couldnt be found",
    statusCode:404,
  });
}

let Comments = [];
comments.forEach(comment => {
  Comments.push(comment.toJSON());

res.json({ Comment })})

});



// PUT /comments/:id
router.put('/:id', async (req, res) => {
  try {
    const { comment } = req.body;
    const findComment = Comment.findAll({
      where:{
        id: req.params.id
      }
    })
    if (!findComment){
       return res.json({
         message: "Comment couldn't be found",
         statusCode: 404,
       });
    }
    if (findComment.userId !== req.user.id) {
 return res.json({
   message: "Forbidden/not allowed",
   statusCode: 403,
 });
    }
    findComment.update({
      comment
    });
    res.json(findComment)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// // DELETE /comments/:id
// router.delete('/:id', async (req, res) => {
//   try {
//     const commentToDelete = await Comment.findByPk(req.params.id);
//     if (commentToDelete) {
//       await commentToDelete.destroy();
//       res.sendStatus(204);
//     } else {
//       res.status(404).json({ message: 'Comment not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;



router.delete("/:id", requireAuth, async (req, res, next) => {
  let comment = await Comment.findAll({
    where: {
      id: req.params.id,
    },
  });

  if (!comment) {
    return res.json({
      message: "Comment couldn't be found",
      statusCode: 404,
    });
  }

  if (comment.userId !== req.user.id) {
    return res.json({
      message: "Forbidden/not allowed",
      statusCode: 403,
    });
  }

  await comment.destroy();

  res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
}
);

module.exports = router;
