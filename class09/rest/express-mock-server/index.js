import express from 'express';
import prodRouter from "./routers/products.js";
import userRouter from "./routers/users.js";

const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.json());
app.use(prodRouter);
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`)
});