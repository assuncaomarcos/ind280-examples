import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
  id: Number,
  quantity: Number,
  unit: String,
  name: String
});

const directionSchema = new mongoose.Schema({
  step: Number,
  instruction: String
});

const dishSchema = new mongoose.Schema({
  name: {type: String, required: true},
  vegetarian: {type: Boolean, default: false},
  photoUrl: String,
  ingredients: [ingredientSchema],
  directions: [directionSchema]
});

export default mongoose.model('Dish', dishSchema);
