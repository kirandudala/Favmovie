const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {SECRET_KEY} = require('../utils/config')

const router = express.Router();

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

router.post('/favorite', auth, async (req, res) => {
  const { movie } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.favorites.push(movie);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/favorites', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
