import Dish from '../models/dish.js';
import fs from 'fs';
import path from 'path';

async function loadData() {
  const dishCount = await Dish.countDocuments();
  if (dishCount > 0) {
    console.log('Les plats existent déjà dans la base de données.');
    return;
  }

  const filePath = path.resolve('./json/dishes.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  try {
    await Dish.insertMany(data);
    console.log('Données importées avec succès!');
  } catch (error) {
    console.error(`Erreur lors de l'importation des données:`, error);
  }
}

export default loadData;
