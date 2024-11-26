import Dish from '../models/dish.js';
import User from '../models/user.js';

import fs from 'fs';
import path from 'path';

async function loadData() {
  const dishCount = await Dish.countDocuments();
  if (dishCount === 0) {
    const dishFilePath = path.resolve('./json/dishes.json');
    const dishes = JSON.parse(fs.readFileSync(dishFilePath, 'utf-8'));

    try {
      await Dish.insertMany(dishes);
      console.log('Données des plats importées avec succès!');
    } catch (error) {
      console.error(`Erreur lors de l'importation des plats:`, error);
    }
  } else {
    console.log('Les plats existent déjà dans la base de données.');
  }

  const userCount = await User.countDocuments();
  if (userCount === 0) {
    const userFilePath = path.resolve('./json/users.json');
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

    try {
      await User.insertMany(users);
      console.log('Données des utilisateurs importées avec succès!');
    } catch (error) {
      console.error(`Erreur lors de l'importation des utilisateurs:`, error);
    }
  } else {
    console.log('Les utilisateurs existent déjà dans la base de données.');
  }
}

export default loadData;
