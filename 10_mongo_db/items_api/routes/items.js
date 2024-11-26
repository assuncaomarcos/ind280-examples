import express from 'express';
import Item from '../models/item.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({message: 'Article non trouvé'});
    res.json(item);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    description: req.body.description,
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
      },
      {new: true}
    );
    if (!item) return res.status(404).json({message: 'Article non trouvé.'});
    res.json(item);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({message: 'Article non trouvé.'});
    res.json({message: 'Item deleted'});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

export default router;
