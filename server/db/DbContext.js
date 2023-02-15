import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ColonySchema } from '../models/Colony';
import { GalaxySchema } from '../models/Galaxy';
import { MoonSchema } from '../models/Moon';
import { PlanetSchema } from '../models/Planet';
import { SpeciesSchema } from '../models/Species';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Colonies = mongoose.model('Colony', ColonySchema);
  Moons = mongoose.model('Moon', MoonSchema);
  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
