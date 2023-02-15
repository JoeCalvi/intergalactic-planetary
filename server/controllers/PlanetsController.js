import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService.js";


export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
    }

    async getPlanets(req, res, next) {
        try {
            const planets = await planetsService.getPlanets()
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
}