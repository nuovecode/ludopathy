import { Application } from 'express';
import { mainService } from './main.service';

export class mainController {

    private service: mainService;

    constructor(private app: Application) {
        this.service = new mainService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.service.baseHtml);
    }
}
