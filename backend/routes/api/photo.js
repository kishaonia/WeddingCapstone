const express = require('express');
const router = express.Router();
const db = require("../../db/models");

// GET /photos
router.get('/photos', async (req, res) => {
  try {
    const photos = await db.Photo.findAll();
    res.json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /photos
router.post('/photos', async (req, res) => {
  try {
    const { userId, url, description } = req.body;
    const newPhoto = await db.Photo.create({ userId, url, description });
    res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /photos/:id
router.get('/photos/:id', async (req, res) => {
  try {
    const photo = await db.Photo.findByPk(req.params.id);
    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ message: 'Photo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /photos/:id
router.put('/photos/:id', async (req, res) => {
  try {
    const { userId, url, description } = req.body;
    const photoToUpdate = await db.Photo.findByPk(req.params.id);
    if (photoToUpdate) {
      await photoToUpdate.update({ userId, url, description });
      res.json(photoToUpdate);
    } else {
      res.status(404).json({ message: 'Photo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /photos/:id
router.delete('/photos/:id', async (req, res) => {
  try {
    const photoToDelete = await db.Photo.findByPk(req.params.id);
    if (photoToDelete) {
      await photoToDelete.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: 'Photo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
