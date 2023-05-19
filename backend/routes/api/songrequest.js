const express = require('express');
const router = express.Router();
const db = require("../../db/models");

// GET /songRequests
router.get('/songRequests', async (req, res) => {
  try {
    const songRequests = await db.songRequest.findAll();
    res.json(songRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /songRequests
router.post('/songRequests', async (req, res) => {
  try {
    const { userId, songName, artist } = req.body;
    const newSongRequest = await db.songRequest.create({ userId, songName, artist });
    res.status(201).json(newSongRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /songRequests/:id
router.get('/songRequests/:id', async (req, res) => {
  try {
    const songRequest = await db.songRequest.findByPk(req.params.id);
    if (songRequest) {
      res.json(songRequest);
    } else {
      res.status(404).json({ message: 'Song request not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /songRequests/:id
router.put('/songRequests/:id', async (req, res) => {
  try {
    const { userId, songName, artist } = req.body;
    const songRequestToUpdate = await db.songRequest.findByPk(req.params.id);
    if (songRequestToUpdate) {
      await songRequestToUpdate.update({ userId, songName, artist });
      res.json(songRequestToUpdate);
    } else {
      res.status(404).json({ message: 'Song request not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /songRequests/:id
router.delete('/songRequests/:id', async (req, res) => {
  try {
    const songRequestToDelete = await db.songRequest.findByPk(req.params.id);
    if (songRequestToDelete) {
      await songRequestToDelete.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: 'Song request not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
