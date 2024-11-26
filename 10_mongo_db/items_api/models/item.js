import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  quantity: {type: Number, default: 1},
  description: {type: String, default: ''}
});

export default mongoose.model('Item', itemSchema);