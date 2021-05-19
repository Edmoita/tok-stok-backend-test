import Product from '../models/Product';
import { IProduct } from '../types';

type ProductCreationParams = {
  name: IProduct['name'];
  price: IProduct['price'];
  images: IProduct['images'];
};
export async function create({
  name,
  price,
  images,
}: ProductCreationParams): Promise<IProduct> {
  return Product.create({ name, price, images });
}

export async function findAll(): Promise<IProduct[]> {
  return Product.find({});
}

export async function findById(id: string): Promise<IProduct | null> {
  return Product.findById(id);
}

type ProductUpdateParams = {
  name?: IProduct['name'];
  price?: IProduct['price'];
  images?: IProduct['images'];
};
export async function findByIdAndUpdate(
  id: string,
  updateData: ProductUpdateParams,
): Promise<IProduct | null> {
  return Product.findByIdAndUpdate(id, updateData, { new: true });
}

export async function findByIdAndDelete(id: string): Promise<IProduct | null> {
  return Product.findByIdAndDelete(id);
}

export async function findByIds(ids: string[]): Promise<IProduct[]> {
  return Product.find({ _id: { $in: ids } });
}
