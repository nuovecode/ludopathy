import express, { Application } from 'express';

import { mainController } from './main.controller';
import { boardController } from './boards/controller';

import config from './config.json'

import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


class App {

    public app: Application;

    public Base: mainController;

    public Board: boardController;

    constructor() {

        this.app = express();

        this.setConfig();
        this.setMongoConfig();

        this.Base = new mainController(this.app);
        this.Board = new boardController(this.app);
    }

    private setConfig() {

        this.app.use(bodyParser.json({ limit: '50mb' }));

        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));

        this.app.use(cors());
    }

    private setMongoConfig() {

        const MONGO_URL = config.db.url

        mongoose.Promise = global.Promise;

        let db = mongoose.connection;

        db.on('error', (error) => {
            console.error(`Error in connecting to ${MONGO_URL}: ${error}`);
            mongoose.disconnect();
        });
        db.on('connected', () => {
            console.log(`Connected to ${MONGO_URL}`);
        });

        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            server:{auto_reconnect:true}
        });
    }
}

export default new App().app;
