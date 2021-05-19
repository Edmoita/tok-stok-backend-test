import { IShowcase } from '../types';
import * as showcasesRepository from '../repositories/showcasesRepository';

export default async function (id: string): Promise<{ _id: IShowcase['_id'] }> {
  const showcase = await showcasesRepository.findByIdAndDelete(id);

  const _id = showcase ? showcase._id : null;

  return { _id };
}
