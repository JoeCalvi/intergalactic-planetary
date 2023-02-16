import { dbContext } from "../db/DbContext.js"


class PlanetsService {

    async getPlanets() {
        const planets = await dbContext.Planets.find()
        return planets
    }

    async getPlanetsByGalaxyId(galaxyId) {
        const planets = await dbContext.Planets.find({ galaxyId })
            // .populate('galaxy', 'name')
        return planets
    }

    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }
}

export const planetsService = new PlanetsService()