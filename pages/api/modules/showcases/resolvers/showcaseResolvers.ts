import { IShowcase } from '../types';
import createShowcase from '../services/createShowcaseService';
import listShowcases from '../services/listShowcasesService';
import readShowcase from '../services/readShowcaseService';
import updateShowcase from '../services/updateShowcaseService';
import deleteShowcase from '../services/deleteShowcaseService';
import { IProduct } from '../../products/types';

function create(_: unknown, args: any): Promise<{ showcase: IShowcase }> {
  const { name, productsIds, discountPercentage } = args.input;

  return createShowcase({ name, productsIds, discountPercentage });
}

function list(): Promise<{ showcases: IShowcase[] }> {
  return listShowcases();
}

function read(_: unknown, args: any): Promise<{ showcase: IShowcase | null }> {
  const { id } = args;

  return readShowcase(id);
}

function update(
  _: unknown,
  args: any,
): Promise<{ showcase: IShowcase | null }> {
  const { id, input } = args;

  const { name, productsIds, discountPercentage } = input;

  return updateShowcase(id, { name, productsIds, discountPercentage });
}

function remove(_: unknown, args: any): Promise<{ _id: IShowcase['_id'] }> {
  const { id } = args;

  return deleteShowcase(id);
}

function getShowcaseProducts(
  showcase: IShowcase,
  _args: unknown,
  context: any,
): Promise<IProduct[]> {
  const { loaders } = context;

  const { productsLoader } = loaders;

  return productsLoader.load(showcase);
}

export const Query = {
  listShowcases: list,
  readShowcase: read,
};

export const Mutation = {
  createShowcase: create,
  updateShowcase: update,
  deleteShowcase: remove,
};

export const references = {
  Showcase: {
    products: getShowcaseProducts,
  },
};
