import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import AdminRouter from './routes/admin/admin';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin', AdminRouter);

app.listen(3000, () => console.log('Server running'));
