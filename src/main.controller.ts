import { Application } from 'express';
import { ludoService } from './services/ludoApi.service';

export class Controller {
    private ludoService: ludoService;

    constructor(private app: Application) {
        this.ludoService = new ludoService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.ludoService.sendMessage);
        this.app.route('/game').get(this.ludoService.getGame);
        this.app.route('/game').post(this.ludoService.addNewGame);
        this.app.route("/game/:id").delete(this.ludoService.deleteGame);

        this.app
            .route("/game/:id")
            .delete(this.ludoService.updateGame)
            .put(this.ludoService.updateGame);
    }
}
