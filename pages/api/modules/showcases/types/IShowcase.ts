import { Document } from 'mongoose';

import { IProduct } from '../../products/types';

/** Vitrine */
export interface IShowcase extends Document {
  /** Nome */
  name: string;
  /** Porcentagem de desconto */
  discountPercentage: number;
  /** Ids dos produtos */
  productsIds: string[];
  /** Produtos */
  products: IProduct[];
}
