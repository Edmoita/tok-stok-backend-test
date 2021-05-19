import { IProduct, UpdateProductInput } from '../types';
import * as productsRepository from '../repositories/productsRepository';

export default async function (
  id: string,
  { name, price, images }: UpdateProductInput,
): Promise<{ product: IProduct | null }> {
  const product = await productsRepository.findByIdAndUpdate(id, {
    name,
    price,
    images,
  });

  return { product };
}
