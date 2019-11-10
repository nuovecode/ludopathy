import { Application } from 'express';
import { boardService } from './service';
import { userService } from '../user/service';
import config from '../config.json'

export class boardController {

    private boardService: boardService;

    private userService: userService;

    constructor(private app: Application) {

        this.boardService = new boardService();

        this.userService = new userService();

        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        this.app.route(`/${VERSION}/board`).get(this.boardService.getBoard);

        this.app.route(`/${VERSION}/board`).post([this.userService.auth, this.boardService.addBoard]);

        this.app.route(`/${VERSION}/board/:id`).put([this.userService.auth, this.boardService.updateBoard]);

        // this.app.route(`/${VERSION}/board/:id`).delete(this.boardService.deleteBoard); TODO: for admin
    }
}
