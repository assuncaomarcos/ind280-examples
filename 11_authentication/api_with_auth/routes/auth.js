import express from 'express';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const {email, password, name} = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({email});
    if (existingUser) return res.status(400).json({message: `Utilisateur existent`});

    // Create new user
    const user = new User({email, password, name});
    await user.save();

    res.status(201).json({message: 'Utilisateur enregistré avec succès'});
  } catch (err) {
    res.status(500).json({
      message: `Erreur lors de l'enregistrement de l'utilisateur`,
      error: err.message
    });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({email});
    if (!user) return res.status(404).json({message: 'Utilisateur non trouvé'});

    // Validate password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({message: `Informations d'identification non valides`});

    // Generate JWT
    const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({token, user: {id: user._id, name: user.name, email: user.email}});
  } catch (err) {
    res.status(500).json({message: 'Erreur de connexion', error: err.message});
  }
});

export default router;
