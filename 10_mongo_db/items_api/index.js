import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import itemsRouter from './routes/items.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Impossible de se connecter à MongoDB:', err));

// Routes
app.use('/api/items', itemsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});