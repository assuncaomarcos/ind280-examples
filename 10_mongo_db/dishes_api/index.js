import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import dishesRouter from './routes/dishes.js';
import loadData from './loader/dataLoader.js';

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connecté à MongoDB');

    // Charger les données initiales si elles ne sont pas présentes
    await loadData();
  })
  .catch((err) => console.error('Impossible de se connecter à MongoDB:', err));

app.use('/api/dishes', dishesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur écoutant sur le port ${PORT}`));
