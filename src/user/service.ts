import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { User } from './model';

import crypto = require('crypto');

export class userService {


    public addUser(req: Request, res: Response) {
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


}
