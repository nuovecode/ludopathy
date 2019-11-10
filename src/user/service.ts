import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { User } from './model';
import auth from '../auth.json'
import jwt from 'jwt-simple';
import crypto from 'crypto';

export class userService {

    public register(req: Request, res: Response) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest("base64");
        req.body.password = salt + '$' + hash;
        const newUser = new User(req.body);
        newUser.save((error: Error, User: MongooseDocument) => {
            if (error) {
                res.send(error);
            } else {
                res.send({id: User.id});
            }
        });
    }

    public areCredentialsValid(req: Request, res: Response, next: any) {
        User.find({email: req.body.email}, (error: Error, User: Array<any>) => {
            if (error) {
                res.send(error);
            } else {
                if (!User[0]) {
                    res.status(400).send({errors: ['Invalid email or password']});
                } else {
                    let passwordFields = User[0].password.split('$');
                    let salt = passwordFields[0];
                    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
                    if (hash === passwordFields[1]) {
                        req.body = {
                            userId: User[0]._id,
                            email: User[0].email,
                            name: User[0].firstName + ' ' + User[0].lastName,
                        };
                        return next();
                    } else {
                        return res.status(400).send({errors: ['Invalid email or password']});
                    }
                }
            }
        });
    }

    public login(req: Request, res: Response) {
        try {
            let refreshId = req.body.userId + auth.objHashSecret;
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
            req.body.refreshKey = salt;
            let token = jwt.encode(req.body, auth.objHashSecret);
            let b = new Buffer(hash);
            let refresh_token = b.toString('base64'); // TODO refresh token
            res.status(201).send({accessToken: token, refreshToken: refresh_token});
        } catch (err) {
            res.status(500).send({errors: err});
        }
    }


}
