import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';

import { Session } from './model';
import { Game } from '../game/model';
import { User } from '../user/model';

import auth from '../auth.json'
import jwt from 'jwt-simple';
import crypto from 'crypto';

export class sessionService {

    public create (req: Request, res: Response) {
        Game.findOne( { _id: req.body.gameId }, (error: Error, Game: any ) => {
            if (error) {
                return res.send(error);
            }
            let salt = crypto.randomBytes(16).toString('base64');
            req.body.game = Game
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

    public invite (req: Request, res: Response) {
        let invite = [{email: 'irene.iaccio+1@gmail.com'}]
        invite.forEach(user =>
            User.update({'email' : user.email}, {'$set': {'invite': 'TOKEN_FROM_SESSION' }}, (error: Error) => {
                if (error) {
                    return res.send(error);
                }
                return res.send(user.email);
            })
        );
    }

    public join (req: Request, res: Response) {
        let userId = (<any>req)['jwt'].userId
        User.update({'_id' : userId}, {'$set': {'invite': null, 'session': 'TOKEN_FROM_SESSION' }}, (error: Error) => {
            if (error) {
                return res.send(error);
            }
            return res.send({session: 'TOKEN_FROM_SESSION' });
        })
    }

    public update (req: Request, res: Response) {
        Session.update({'token' : 'TOKEN_FROM_SESSION'}, (error: Error) => {
            if (error) {
                return res.send(error);
            }
            let io = req.app.get('socketio');
            io.to((<any>Session)['token']).emit('session-update', Session)
            return res.send(Session);
        })
    }
}
