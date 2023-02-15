import { dbContext } from "../db/DbContext.js"


class PlanetsService {

    async getPlanets() {
        const planets = await dbContext.Planets.find()
        return planets
    }
}

export const planetsService = new PlanetsService()