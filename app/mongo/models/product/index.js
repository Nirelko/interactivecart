import mongoose, { Schema } from 'mongoose';

import { imageSchema } from '../image';

export const productSchema = new Schema({
  id: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  name: String,
  price: Number,
  image: imageSchema
});

export default mongoose.model('product', productSchema);