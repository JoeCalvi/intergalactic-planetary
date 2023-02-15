import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId


export const ColonySchema = new Schema(
    {
        name: { type: String },
        population: { type: Number },
        planetId: { type: ObjectId, ref: 'Planet', required: true },
        speciesId: { type: ObjectId, ref: 'Species' }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)