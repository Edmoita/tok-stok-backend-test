import { CreateShowcaseInput, IShowcase } from '../types';
import * as showcasesRepository from '../repositories/showcasesRepository';

export default async function ({
  name,
  productsIds,
  discountPercentage,
}: CreateShowcaseInput): Promise<{ showcase: IShowcase }> {
  const showcase = await showcasesRepository.create({
    name,
    productsIds,
    discountPercentage,
  });

  return { showcase };
}
