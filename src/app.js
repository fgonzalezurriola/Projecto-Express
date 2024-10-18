import express from 'express';
import morgan from 'morgan';

const app = express();

//  'dev' es para que muestre un mensaje por la consola
app.use(morgan('dev'));

export default app;