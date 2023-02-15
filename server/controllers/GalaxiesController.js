import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService.js";


export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            // .post('', this.createGalaxy)
    }

    async getGalaxies(req, res, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
}