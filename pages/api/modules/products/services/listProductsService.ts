import { IProduct } from '../types';
import * as productsRepository from '../repositories/productsRepository';

export default async function (): Promise<{ products: IProduct[] }> {
  const products = await productsRepository.findAll();

  return { products };
}
