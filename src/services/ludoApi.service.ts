import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { Game } from '../models/model';

export class ludoService {

    public sendMessage(req: Request, res: Response) {
        return res.status(200).send("rispostaaaaaaaa");
    }

    public getGame(req: Request, res: Response) {
        Game.find({}, (error: Error, Game: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(Game);
        });
    }

    public addNewGame(req: Request, res: Response) {
        const newGame = new Game(req.body);
        newGame.save((error: Error, Game: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(Game);
        });
    }

    public deleteGame(req: Request, res: Response) {
        const gameID = req.params.id;
        Game.findByIdAndDelete(gameID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Game not found :(';
            res.send(message);
        });
    }

    public updateGame(req: Request, res: Response) {
        const gameID = req.params.id;
        Game.findByIdAndUpdate(
            gameID,
            req.body,
            (error: Error, Game: any) => {
                if (error) {
                    res.send(error);
                }
                const message = Game
                    ? 'Updated successfully'
                    : 'Game not found :(';
                res.send(message);
            }
        );
    }
}
