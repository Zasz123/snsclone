'use strict';

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as cors from 'cors';

import rootControllers from './routes/rootControllers';

import CustomError from './routes/middlewares/error/customError';
import ErrorMiddleware from './routes/middlewares/error/errorMiddlewares';

import '../database/connection';

const app: express.Express = express();

// app.use(cors);

//view engine setup

const dir = path.join(__dirname, '../uploads');

app.set('views',path.join(__dirname,'views'));
app.engine('.html',ejs.renderFile);
app.set('view engine','html');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/static', express.static(dir));


app.use('/', rootControllers);

app.use((req, res, next) => {
    next(new CustomError({ name: 'Not_Found' }));
});

app.use(ErrorMiddleware);


export default app;
