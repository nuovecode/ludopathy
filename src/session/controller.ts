import { Application } from 'express';
import { sessionService } from './service';
import { userService } from '../user/service';
import config from '../config.json'

export class sessionController {

    private sessionService: sessionService;

    private userService: userService;

    constructor(private app: Application) {

        this.sessionService = new sessionService();

        this.userService = new userService();

        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        this.app.route(`/${VERSION}/create`).post([this.userService.auth, this.sessionService.create]);

        this.app.route(`/${VERSION}/invite:game`).put([this.userService.auth, this.sessionService.invite]);

        this.app.route(`/${VERSION}/join:game`).put([this.userService.auth, this.sessionService.join]);

        this.app.route(`/${VERSION}/update/:session`).put([this.userService.auth, this.sessionService.update]);

    }
}
