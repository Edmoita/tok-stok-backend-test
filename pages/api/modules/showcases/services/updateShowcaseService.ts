import { IShowcase, UpdateShowcaseInput } from '../types';
import * as showcasesRepository from '../repositories/showcasesRepository';

export default async function (
  id: string,
  { name, productsIds, discountPercentage }: UpdateShowcaseInput,
): Promise<{ showcase: IShowcase | null }> {
  const showcase = await showcasesRepository.findByIdAndUpdate(id, {
    name,
    productsIds,
    discountPercentage,
  });

  return { showcase };
}
