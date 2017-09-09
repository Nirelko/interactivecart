import { Schema } from 'mongoose';

export const imageSchema = new Schema({
  data: Buffer,
  contentType: String
});