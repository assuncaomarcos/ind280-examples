import express from 'express';
import Dish from '../models/dish.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({message: 'Plat non trouvé'});
    res.json(dish);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.post('/', async (req, res) => {
  const dish = new Dish(req.body);
  try {
    const newDish = await dish.save();
    res.status(201).json(newDish);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updatedDish) return res.status(404).json({message: 'Plat non trouvé'});
    res.json(updatedDish);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) return res.status(404).json({message: 'Plat non trouvé'});
    res.json({message: 'Plat supprimé'});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

export default router;
