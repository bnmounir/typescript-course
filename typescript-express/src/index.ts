import 'reflect-metadata'
import express from "express";
import bodyParser from "body-parser";
import cookieSession from 'cookie-session'
import './routes'
import {AppRouter} from './AppRouter'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lecodesecret23$']}));

app.use(AppRouter.getInstance);



app.listen("3003", () => console.log("Listening on port 3003"));
