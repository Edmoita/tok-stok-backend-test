import { Schema, Model, model, models } from 'mongoose';

import { IShowcase } from '../types';

const ShowcaseSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    productsIds: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { toJSON: { virtuals: true } },
);

ShowcaseSchema.virtual('products', {
  ref: 'Product',
  localField: 'productsIds',
  foreignField: '_id',
});

const Showcase: Model<IShowcase> =
  models.Showcase || model('Showcase', ShowcaseSchema);

export default Showcase;
