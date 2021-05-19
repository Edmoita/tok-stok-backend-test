import { CreateProductInput, IProduct } from '../types';
import * as productsRepository from '../repositories/productsRepository';

export default async function ({
  name,
  price,
  images,
}: CreateProductInput): Promise<{ product: IProduct }> {
  const product = await productsRepository.create({ name, price, images });

  return { product };
}
