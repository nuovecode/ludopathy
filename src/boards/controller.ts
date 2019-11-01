import { Application } from 'express';
import { boardService } from './service';

export class boardController {

    private boardService: boardService;

    constructor(private app: Application) {
        this.boardService = new boardService();
        this.routes();
    }

    public routes() {

        this.app.route('/V1/board').get(this.boardService.getBoard);

        this.app.route('/V1/board').post(this.boardService.addBoard);

        this.app.route('/V1/board/:id').delete(this.boardService.deleteBoard);

        this.app.route('/V1/board/:id').delete(this.boardService.updateBoard).put(this.boardService.updateBoard);
    }
}
