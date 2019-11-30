import {Game} from "../game/model";
import {MongooseDocument} from "mongoose";

export class diceService {

    public throwDice (req: Request, res: Response) {
        /**
        Game.find({}, (error: Error, Game: MongooseDocument) => {
            if (error) {
                return res.send(error);
            }
            res.json(Game);
        });**/
        return 5
    }
}
