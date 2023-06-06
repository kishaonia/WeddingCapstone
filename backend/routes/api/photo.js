const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo } = require("../../db/models");


router.get('/', requireAuth, async (req, res, next) => {

  let description = await Photo.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'lastName', 'firstName'],
      }
    ],
  });

  if (!description) {
    return res.json({
      message: "Description couldn't be found",
      statusCode: 404,
    });
  }

  let Photos = [];

  description.forEach(photo => {
    Photos.push(photo.toJSON());
  });

  res.json({ Photos });
});

router.put('/:id', requireAuth, async (req, res, next) => {
  const { description, url, like, file } = req.body;
  let photo = await Photo.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!photo) {
    return res.json({
      message: "Photo couldn't be found",
      statusCode: 404,
    });
  }

  if (photo.userId !== req.user.id) {
    return res.json({
      message: "Forbidden/not allowed",
      statusCode: 403,
    });
  }

  let updatePhoto = await photo.update({
    description,
    url,
    like,
    file
  });

  res.json(updatePhoto);
});

router.delete("/:id", requireAuth, async (req, res, next) => {
  let photo = await Photo.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!photo) {
    return res.json({
      message: "Photo couldn't be found",
      statusCode: 404,
    });
  }

  if (photo.userId !== req.user.id) {
    return res.json({
      message: "Forbidden/not allowed",
      statusCode: 403,
    });
  }

  await photo.destroy();

  res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
