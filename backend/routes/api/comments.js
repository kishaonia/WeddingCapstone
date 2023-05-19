const express = require('express');
const router = express.Router();
const db = require("../../db/models");


// GET /comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await db.Comment.findAll();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /comments
router.post('/comments', async (req, res) => {
  try {
    const { userId, registryId, comment } = req.body;
    const newComment = await db.Comment.create({ userId, registryId, comment });
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /comments/:id
router.get('/comments/:id', async (req, res) => {
  try {
    const comment = await db.Comment.findByPk(req.params.id);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /comments/:id
router.put('/comments/:id', async (req, res) => {
  try {
    const { userId, registryId, comment } = req.body;
    const commentToUpdate = await db.Comment.findByPk(req.params.id);
    if (commentToUpdate) {
      await commentToUpdate.update({ userId, registryId, comment });
      res.json(commentToUpdate);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /comments/:id
router.delete('/comments/:id', async (req, res) => {
  try {
    const commentToDelete = await db.Comment.findByPk(req.params.id);
    if (commentToDelete) {
      await commentToDelete.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
