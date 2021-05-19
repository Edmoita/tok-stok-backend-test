import { IProduct } from '../types';
import * as productsRepository from '../repositories/productsRepository';

export default async function (
  id: string,
): Promise<{ product: IProduct | null }> {
  const product = await productsRepository.findById(id);

  return { product };
}
