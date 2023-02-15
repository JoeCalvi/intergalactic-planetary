import { Schema } from "mongoose";


export const GalaxySchema = new Schema(
    {
        name: { type: String },
        stars: { type: Number }
    },
    { timestamps: true, toJSON: { virtuals: true }}
)

