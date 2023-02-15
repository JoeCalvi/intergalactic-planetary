import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId


export const MoonSchema = new Schema(
    {
        name: { type: String },
        planetId: { type: ObjectId, ref: 'Planet', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)