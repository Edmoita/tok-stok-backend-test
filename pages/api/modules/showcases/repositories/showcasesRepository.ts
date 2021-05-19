import Showcase from '../models/Showcase';
import { IShowcase } from '../types';

type ShowcaseCreationParams = {
  name: IShowcase['name'];
  productsIds: IShowcase['productsIds'];
  discountPercentage: IShowcase['discountPercentage'];
};
export async function create({
  name,
  productsIds,
  discountPercentage,
}: ShowcaseCreationParams): Promise<IShowcase> {
  return Showcase.create({ name, productsIds, discountPercentage });
}

export async function findAll(): Promise<IShowcase[]> {
  return Showcase.find({});
}

export async function findById(id: string): Promise<IShowcase | null> {
  return Showcase.findById(id);
}

type ShowcaseUpdateParams = {
  name?: IShowcase['name'];
  productsIds?: IShowcase['productsIds'];
  discountPercentage?: IShowcase['discountPercentage'];
};
export async function findByIdAndUpdate(
  id: string,
  updateData: ShowcaseUpdateParams,
): Promise<IShowcase | null> {
  return Showcase.findByIdAndUpdate(id, updateData, { new: true });
}

export async function findByIdAndDelete(id: string): Promise<IShowcase | null> {
  return Showcase.findByIdAndDelete(id);
}
