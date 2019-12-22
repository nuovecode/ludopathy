import express, { Application } from 'express';

import { mainController } from './main.controller';
import { gameController } from './game/controller';
import { userController } from './user/controller';
import { sessionController } from './session/controller';
import { diceController } from './dice/controller';

import config from './config.json'

import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


const MONGO_URL = config.db.url

const MONGO_CONNECT_TRIES = 3

const MONGO_CONNECT_INTERVAL = 1000

class App {

    public app: Application;

    public Base: mainController;

    public Board: gameController;

    public User: userController;

    public Session: sessionController;

    public Dice: diceController;

    constructor() {

        this.app = express();

        this.setConfig();

        this.setMongoConfig();

        this.Base = new mainController(this.app);

        this.Board = new gameController(this.app);

        this.User = new userController(this.app);

        this.Session = new sessionController(this.app);

        this.Dice = new diceController(this.app);
    }

    private setConfig() {

        this.app.use(bodyParser.json({ limit: '50mb' }));

        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));

        this.app.use(cors());
    }

    private setMongoConfig() {

        mongoose.Promise = global.Promise;

        let db = mongoose.connection;

        db.on('error', (error) => {
            console.error(`Error in connecting to ${MONGO_URL}: ${error}`);
            // mongoose.disconnect();
        });

        db.on('connected', () => {
            console.log(`Connected to ${MONGO_URL}`);
        });

        mongoose.connect(MONGO_URL, {
            reconnectInterval: MONGO_CONNECT_INTERVAL,
            reconnectTries: MONGO_CONNECT_TRIES,
            useNewUrlParser: true,
            server:{auto_reconnect:true}
        });
    }

}

export default new App().app;
