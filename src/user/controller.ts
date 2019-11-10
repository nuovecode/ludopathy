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

        this.app.route(`/${VERSION}/register`).post(this.userService.register);

        this.app.route(`/${VERSION}/login`).post([this.userService.areCredentialsValid, this.userService.login]);

        this.app.route(`/${VERSION}/auth`).get(this.userService.auth);

    }
}
