import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import coursesRouter from "./routes/courses.js";
import cartsRouter from "./routes/carts.js";

const PORT = 3000;
const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/courses', coursesRouter);
app.use('/carts', cartsRouter);

app.get('/', function(req, res, next){
  res.json({Message: "WELCOME TO THE OPEN STUDY COLLEGE ASSESSMENT :) "})
})
app.use(function (req, res, next) {
  res.status(404).json({message: "Nothing found, sorry"})
})



app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;