import { Application } from 'express';
import { userService } from './service';
import config from '../config.json'

export class userController {

    private userService: userService;

    constructor(private app: Application) {

        this.userService = new userService();

        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        this.app.route(`/${VERSION}/user`).post(this.userService.addUser);

    }
}
