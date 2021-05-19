import { IProduct } from '../types';
import createProduct from '../services/createProductService';
import listProducts from '../services/listProductsService';
import readProduct from '../services/readProductService';
import updateProduct from '../services/updateProductService';
import deleteProduct from '../services/deleteProductService';

function create(_: unknown, args: any): Promise<{ product: IProduct }> {
  const { name, price, images } = args.input;

  return createProduct({ name, price, images });
}

function list(_: unknown, args: any): Promise<{ products: IProduct[] }> {
  return listProducts();
}

function read(_: unknown, args: any): Promise<{ product: IProduct | null }> {
  const { id } = args;

  return readProduct(id);
}

function update(_: unknown, args: any): Promise<{ product: IProduct | null }> {
  const { id, input } = args;

  const { name, price, images } = input;

  return updateProduct(id, { name, price, images });
}

function remove(_: unknown, args: any): Promise<{ _id: IProduct['_id'] }> {
  const { id } = args;

  return deleteProduct(id);
}

export const Query = {
  listProducts: list,
  readProduct: read,
};

export const Mutation = {
  createProduct: create,
  updateProduct: update,
  deleteProduct: remove,
};
