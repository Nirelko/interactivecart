import mongoose from 'mongoose';

import Seeder from './seeder';

mongoose.connect(process.env.CONNECTION_STRING);
mongoose.Promise = Promise;
mongoose.connection.once('open', () => {
  if (process.env.ENV === 'development' && process.env.SHOULD_SEED === 'true') {
    return new Seeder({ shouldDrop: true }).seed();
  }
});