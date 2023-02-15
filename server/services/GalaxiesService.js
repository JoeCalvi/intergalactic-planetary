import { dbContext } from "../db/DbContext.js"

class GalaxiesService {

    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }
}

export const galaxiesService = new GalaxiesService()