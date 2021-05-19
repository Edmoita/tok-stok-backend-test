import { IShowcase } from '../types';
import * as showcasesRepository from '../repositories/showcasesRepository';

export default async function (
  id: string,
): Promise<{ showcase: IShowcase | null }> {
  const showcase = await showcasesRepository.findById(id);

  return { showcase };
}
