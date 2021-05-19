import { Document } from 'mongoose';

export interface IProduct extends Document {
  /** Nome */
  name: string;
  /** Preço */
  price: number;
  /** Lista de URLs de imagens */
  images: string[];
}
