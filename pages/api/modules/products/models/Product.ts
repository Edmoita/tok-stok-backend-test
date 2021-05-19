import { Schema, model, Model, models } from 'mongoose';

import { IProduct } from '../types';

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

const Product: Model<IProduct> =
  models.Product || model('Product', ProductSchema);

export default Product;
