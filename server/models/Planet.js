import { Schema } from "mongoose"
import { GalaxySchema } from "./Galaxy.js"


const ObjectId = Schema.Types.ObjectId


export const PlanetSchema = new Schema(
    {
        name: { type: String },
        biome: { type: String },
        atmosphere: { type: Boolean },
        galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('galaxy', {
    ref: 'Galaxy',
    justOne: true,
    localField: 'galaxyId',
    foreignField: '_id'
})