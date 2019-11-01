import { Request, Response } from "express";

export class mainService {

    public baseMessage(req: Request, res: Response) {
        return res.status(200).send('Place your bets!');
    }

}
