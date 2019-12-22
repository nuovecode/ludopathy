import { Request, Response } from "express";

export class diceService {

    public throwDice (req: Request, res: Response) {
        let results:Array<number> = []
        if (Object.entries(req.body).length === 0) {
            return res.send('No dices') // @todo: take info from session
        }
        Object.keys(req.body).forEach(k => {
            const max = req.body[k] + 1
            results.push(Math.floor(Math.random() * (+max - 1) + 1))
        })
        res.send(results)
    }
}
