import { connection } from 'mongoose';
import _ from 'lodash';

import productSeed from '../models/product/seed';

export default class Seeder {
  constructor ({ shouldDrop } = {}) {
    this.seeds = [];

    this.shouldDrop = shouldDrop;
  }

  addSeed (model, data, { shouldDrop } = {}) {
    this.seeds.push({
      model,
      data,
      shouldDrop
    });
  }

  seed () {
    const { seeds } = this;

    productSeed(this);

    return Promise.all(seeds
      .filter(seed => this.shouldDrop || seed.shouldDrop)
      .map(seedToDrop => connection.db.dropCollection(`${seedToDrop.model.modelName}s`)))
      .then(() => {
        return Promise.all(_.flattenDeep(seeds.map(seed => {
          if (!seed.data || !seed.data.length) {
            return Promise.resolve();
          }

          return seed.data.map(item => seed.model.create(item));
        })));
      });
  }
}