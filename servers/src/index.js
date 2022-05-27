import express, { Router } from 'express';
import bodyParser from 'body-parser';
import initRoutes from './router/route';
import cors from 'cors';
import 'dotenv/config';
import connectData from './config/connectDatabase';
const app = express();

connectData();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

initRoutes(app);
// app.use('/', router)
// app.use('/api/auth', router)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
