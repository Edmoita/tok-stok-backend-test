import { IProduct } from '../types';
import * as productsRepository from '../repositories/productsRepository';

export default async function (id: string): Promise<{ _id: IProduct['_id'] }> {
  const product = await productsRepository.findByIdAndDelete(id);

  const _id = product ? product._id : null;

  return { _id };
}
