import { Application } from 'express';
import { diceService } from './service';
import { userService } from '../user/service';
import config from '../config.json'

export class diceController {

    private diceService: diceService;

    private userService: userService;

    constructor(private app: Application) {

        this.diceService = new diceService();

        this.userService = new userService();

        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        //this.app.route(`/${VERSION}/session`).get([this.userService.auth, this.diceService.throw]);

    }
}
