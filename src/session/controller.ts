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

        //this.app.route(`/${VERSION}/session`).get([this.userService.auth, this.sessionService.getSession]);

        //this.app.route(`/${VERSION}/session`).post([this.userService.auth, this.sessionService.createSession]);

        //this.app.route(`/${VERSION}/session/:id`).put([this.userService.auth, this.sessionService.joinSession]);

        //this.app.route(`/${VERSION}/session/:id`).delete([this.userService.auth, this.sessionService.deleteSession]); 

    }
}
