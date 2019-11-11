import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';

import { Session } from './model';
import { Game } from '../game/model';

import auth from '../auth.json'
import jwt from "jwt-simple";
import crypto from "crypto";

export class sessionService {

    public create (req: Request, res: Response) {
        Game.findOne( { _id: req.body.gameId }, (error: Error, Game: any ) => {
            if (error) {
                return res.send(error);
            }
            req.body.game = Game
            let salt = crypto.randomBytes(16).toString('base64');
            req.body.token = jwt.encode(req.body.gameId + salt, auth.objHashSecret)
            const newSession = new Session(req.body);
            newSession.save((error: Error, Session: MongooseDocument) => {
                if (error) {
                    return res.send(error);
                }
                return res.status(201).send(Session);
            });
        });
    }
}
