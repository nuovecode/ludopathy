import { Application } from 'express';
import { diceService } from './service';
import config from '../config.json'

export class diceController {

    private diceService: diceService;

    constructor(private app: Application) {

        this.diceService = new diceService();

        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        this.app.route(`/${VERSION}/throw-dice`).get(this.diceService.throwDice);

    }
}
