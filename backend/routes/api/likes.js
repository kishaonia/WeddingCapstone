const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { sequelize, Op } = require("sequelize");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Comment, songRequest, Registry, Photo, Like } = require("../../db/models");


// POST /likes
router.post('/', async (req, res, next) => {
  const { photoId, commentId, registryId, songRequestId } = req.body;

  try {
    const like = await Like.create({
      photoId,
      songRequestId,
      commentId,
      registryId,
      like: 1 // Initialize the like count to 1
    });

    res.status(201).json({ like });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create like' });
  }
});

// GET /likes/:id
router.get('/:id', async (req, res, next) => {
  const likeId = req.params.id;

  try {
    const like = await Like.findByPk(likeId);

    if (like) {
      res.json({ like });
    } else {
      res.status(404).json({ error: 'Like not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch like' });
  }
});

// PUT /likes/:id
router.put('/:id', async (req, res, next) => {
  const likeId = req.params.id;

  try {
    const like = await Like.findByPk(likeId);

    if (like) {
      like.like += 1; // Increment the like count by 1
      await like.save();

      res.json({ like });
    } else {
      res.status(404).json({ error: 'Like not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update like' });
  }
});

// DELETE /likes/:id
router.delete('/:id', async (req, res, next) => {
  const likeId = req.params.id;

  try {
    const like = await Like.findByPk(likeId);

    if (like) {
      await like.destroy();

      res.json({ message: 'Like deleted successfully' });
    } else {
      res.status(404).json({ error: 'Like not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete like' });
  }
});

module.exports = router;
