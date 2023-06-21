const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo, Guestlist } = require("../../db/models");


router.get('/', requireAuth, async (req, res, next) => {

  let description = await Guestlist.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'lastName', 'firstName'],
      }
    ],
  });

  if (!description) {
    return res.json({
      message: "Guest couldn't be found",
      statusCode: 404,
    });
  }

  let Guestlists = [];

  description.forEach(guestlist => {
    Guestlists.push(guestlist.toJSON());
  });

  res.json({ Guestlists });
});

router.put('/:id', requireAuth, async (req, res, next) => {
  const { guest, description } = req.body;
  let guestlist = await Guestlist.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!guestlist) {
    return res.json({
      message: "Guestlist couldn't be found",
      statusCode: 404,
    });
  }

  if (guestlist.userId !== req.user.id) {
    return res.json({
      message: "Forbidden/not allowed",
      statusCode: 403,
    });
  }

  let updateGuestlist = await guestlist.update({
    guest,
    description,
  });

  res.json(updateGuestlist);
});

router.delete("/:id", requireAuth, async (req, res, next) => {
  let guestlist = await Guestlist.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!guestlist) {
    return res.json({
      message: "Guestlist couldn't be found",
      statusCode: 404,
    });
  }

  if (guestlist.userId !== req.user.id) {
    return res.json({
      message: "Forbidden/not allowed",
      statusCode: 403,
    });
  }

  await guestlist.destroy();

  res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
}
);

module.exports = router;
