import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { Board } from './model';

export class boardService {

    public getBoard(req: Request, res: Response) {
        Board.find({}, (error: Error, Board: MongooseDocument) => {
            if (error) {
               return res.send(error);
            }
            res.json(Board);
        });
    }

    public addBoard(req: Request, res: Response) {
        const newBoard = new Board(req.body);
        newBoard.save((error: Error, Board: MongooseDocument) => {
            if (error) {
               return res.send(error);
            }
            res.json(Board);
        });
    }

    public deleteBoard(req: Request, res: Response) {
        const boardID = req.params.id;
        Board.findByIdAndDelete(boardID, (error: Error, deleted: any) => {
            if (error) {
                return res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Board not found :(';
            res.send(message);
        });
    }

    public updateBoard(req: Request, res: Response) {
        const boardID = req.params.id;
        Board.findByIdAndUpdate(
            boardID,
            req.body,
            (error: Error, Board: any) => {
                if (error) {
                    return res.send(error);
                }
                const message = Board ? 'Updated successfully' : 'Board not found :(';
                res.send(message);
            }
        );
    }
}
