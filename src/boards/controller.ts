import { Application } from 'express';
import { boardService } from './service';
import config from '../config.json'

export class boardController {

    private boardService: boardService;

    constructor(private app: Application) {
        this.boardService = new boardService();
        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        this.app.route(`/${VERSION}/board`).get(this.boardService.getBoard);

        this.app.route(`/${VERSION}/board`).post(this.boardService.addBoard);

        this.app.route(`/${VERSION}/board/:id`).delete(this.boardService.deleteBoard);

        this.app.route(`/${VERSION}/board/:id`).delete(this.boardService.updateBoard).put(this.boardService.updateBoard);
    }
}
