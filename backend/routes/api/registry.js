const express = require('express');
const router = express.Router();
const db = require("../../db/models");

// GET /registries
router.get('/registries', async (req, res) => {
  try {
    const registries = await db.Registry.findAll();
    res.json(registries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /registries
router.post('/registries', async (req, res) => {
  try {
    const { userId, registryItem, url } = req.body;
    const newRegistry = await db.Registry.create({ userId, registryItem, url });
    res.status(201).json(newRegistry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /registries/:id
router.get('/registries/:id', async (req, res) => {
  try {
    const registry = await db.Registry.findByPk(req.params.id);
    if (registry) {
      res.json(registry);
    } else {
      res.status(404).json({ message: 'Registry not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /registries/:id
router.put('/registries/:id', async (req, res) => {
  try {
    const { userId, registryItem, url } = req.body;
    const registryToUpdate = await db.Registry.findByPk(req.params.id);
    if (registryToUpdate) {
      await registryToUpdate.update({ userId, registryItem, url });
      res.json(registryToUpdate);
    } else {
      res.status(404).json({ message: 'Registry not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /registries/:id
router.delete('/registries/:id', async (req, res) => {
  try {
    const registryToDelete = await db.Registry.findByPk(req.params.id);
    if (registryToDelete) {
      await registryToDelete.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: 'Registry not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
