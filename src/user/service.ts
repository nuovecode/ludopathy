import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { User } from './model';
import auth from '../auth.json'
import jwt from 'jwt-simple';
import crypto from 'crypto';

const INVALID_CREDENTIALS = 'Invalid email or password'

export class userService {

    public register(req: Request, res: Response) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest('base64');
        req.body.password = salt + '$' + hash;
        const newUser = new User(req.body);
        newUser.save((error: Error, User: MongooseDocument) => {
            if (error) {
                return res.send(error);
            }
            res.send({id: User.id});
        });
    }

    public areCredentialsValid(req: Request, res: Response, next: any) {
        User.find({email: req.body.email}, (error: Error, User: Array<any>) => {
            if (error) {
                res.send(error);
            } else {
                if (!User[0]) {
                   return res.status(400).send({error: INVALID_CREDENTIALS});
                }
                let passwordFields = User[0].password.split('$');
                let salt = passwordFields[0];
                let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
                if (hash === passwordFields[1]) {
                    req.body = {
                        userId: User[0]._id,
                        email: User[0].email,
                        name: User[0].firstName + ' ' + User[0].lastName,
                        games: User[0].games
                    };
                    return next();
                }
                return res.status(400).send({error: INVALID_CREDENTIALS});
            }
        });
    }

    public login(req: Request, res: Response) {
        try {
            let refreshId = req.body.userId + auth.objHashSecret;
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt).update(refreshId).digest('base64');
            req.body.refreshKey = salt;
            let token = jwt.encode(req.body, auth.objHashSecret);
            let b = new Buffer(hash);
            let refresh_token = b.toString('base64'); // TODO refresh token
            res.status(201).send({accessToken: token, refreshToken: refresh_token});
        } catch (err) {
            res.status(500).send({errors: err});
        }
    }

    public auth(req: Request, res: Response, next: any) {
        if (!req.headers['authorization']) return res.status(401).send();
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                (<any>req)['jwt'] = jwt.decode(authorization[1], auth.objHashSecret);
                //res.send(jwt.decode(authorization[1], auth.objHashSecret));
                return next();
            }
        } catch (err) {
            return res.status(403).send(err);
        }
    }

}
