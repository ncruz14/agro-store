import express from 'express';
import cors    from 'cors';
import { config } from 'dotenv'; config();
import { connectDB } from './config/db.js';
import authRoutes     from './routes/auth.routes.js';
import productRoutes  from './routes/product.routes.js';

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(process.env.PORT, ()=>
  console.log(`🚀 API corriendo en http://localhost:${process.env.PORT}`)
);
