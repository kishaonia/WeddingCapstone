const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo} = require("../../db/models");






router.put('/:id', requireAuth, async(req, res, next) => {
  const {registryItem, url} = req.body
  let registry = await Registry.findOne({
    where: {
      id: req.params.id
    }
  })

  if (!registry){
       return res.json({
         message: "Review couldn't be found",
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
      message: "Review couldn't be found",
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


module.exports = router;
