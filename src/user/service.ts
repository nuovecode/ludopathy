import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { User } from './model';

import crypto = require('crypto');

export class userService {

    public addUser(req: Request, res: Response) {
        const newUser = new User(req.body);
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest("base64");
        req.body.password = salt + "$" + hash;
        req.body.permissionLevel = 1;
        newUser.save((error: Error, User: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.send(User.id);
        });
    }


}
