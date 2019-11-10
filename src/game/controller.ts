import { Application } from 'express';
import { gameService } from './service';
import { userService } from '../user/service';
import config from '../config.json'

export class gameController {

    private gameService: gameService;

    private userService: userService;

    constructor(private app: Application) {

        this.gameService = new gameService();

        this.userService = new userService();

        this.routes();
    }

    public routes() {

        const VERSION = 'V' + config.Api.version

        this.app.route(`/${VERSION}/game`).get(this.gameService.getAllGame);

        this.app.route(`/${VERSION}/game`).post([this.userService.auth, this.gameService.addGame]);

        this.app.route(`/${VERSION}/game/:id`).put([this.userService.auth, this.gameService.updateGame]);

        // this.app.route(`/${VERSION}/game/:id`).delete(this.gameService.deleteGame); TODO: for admin
    }
}
