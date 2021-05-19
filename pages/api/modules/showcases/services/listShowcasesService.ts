import { IShowcase } from '../types';
import * as showcasesRepository from '../repositories/showcasesRepository';

export default async function (): Promise<{ showcases: IShowcase[] }> {
  const showcases = await showcasesRepository.findAll();

  return { showcases };
}
