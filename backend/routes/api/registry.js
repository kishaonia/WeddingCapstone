const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo} = require("../../db/models");


router.get('/', requireAuth, async(req, res, next) => {

  let registryList = await Registry.findAll({

    include: [
      {
      model: Comment,
      attributes: ["id", "comment"]
      },
      {
        model: User,
        attributes: ['id', 'lastName', 'firstName']
      }
    ],


  });


  if (!registryList){
    return res.json({
      message: "List of registries couldn't be found",
      statusCode: 404,
    });
  }

  let Registries = []

  registryList.forEach(registry => {
    Registries.push(registry.toJSON())
  })

  res.json({Registries})
})



router.put('/:id', requireAuth, async(req, res, next) => {
  const {registryItem, url} = req.body
  let registry = await Registry.findOne({
    where: {
      id: req.params.id
    }
  })

  if (!registry){
       return res.json({
         message: "Registry couldn't be found",
         statusCode: 404,
       });
  }

  if (registry.userId !== req.user.id) {
   return res.json({
     message: "Forbidden/not allowed",
     statusCode: 403,
   });
  }

  let updateRegistry = await registry.update({
    registryItem,
    url
    })
 res.json(updateRegistry)
})

router.delete("/:id", requireAuth, async (req, res, next) => {

  let registry = await Registry.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!registry) {
    return res.json({
      message: "Registry couldn't be found",
      statusCode: 404,
    });
  }

  if (registry.userId !== req.user.id) {
    return res.json({
      message: "Forbidden/not allowed",
      statusCode: 403,
    });
  }

  await registry.destroy()
   res.json({
     message: "Successfully deleted",
     statusCode: 200,
   });
})

//get comment for registry

router.get('/:id/comments', requireAuth, async(req, res, next) => {
  let findRegistry = await Registry.findOne({
    where: {
      id: req.params.id
    }
   
  })

  if (!findRegistry){
     return res.json({
       message: "Registry couldn't be found",
       statusCode: 404,
     });
  }
  let findComment = await Comment.findAll({
    where: {
      registryId: findRegistry.id
    }
  })
  let Comments = []
  findComment.forEach(comment => {
    Comments.push(comment.toJSON())
  })
 res.json({Comments})
 
  
 
})

//Create comment for Registry
router.post('/:id/comments', requireAuth, async(req, res, next) => {
  const {comment} = req.body
  let registry = await Registry.findOne({
    where: {
      id: req.params.id
    }
  })
  if (!registry){
      return res.json({
        message: "Comment couldn't be found",
        statusCode: 404,
      });
  }


  const newComment = await registry.createComment({
    userId: req.user.id,
    registryId: req.params.id,
    comment: comment,
  })
  res.json(newComment)
})
module.exports = router;
