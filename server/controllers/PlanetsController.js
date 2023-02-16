import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService.js";


export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .get('/:galaxyId', this.getPlanetsByGalaxyId)
            .post('', this.createPlanet)
    }

    async getPlanets(req, res, next) {
        try {
            const planets = await planetsService.getPlanets()
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsByGalaxyId(req, res, next) {
        try {
            const galaxyId = req.params.galaxyId
            const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const planet = await planetsService.createPlanet(planetData)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}