import Dataloader from 'dataloader';

import { IShowcase } from '../types';
import { IProduct } from '../../products/types';
import * as productsRepository from '../../products/repositories/productsRepository';

function getProductsIdsFromShowcases(
  showcases: readonly IShowcase[],
): string[] {
  return showcases.flatMap(({ productsIds }) => {
    if (productsIds && productsIds.length > 0) {
      return productsIds;
    }

    return [];
  });
}

function applyDiscountPercentageOnProductsPrices(
  showcases: readonly IShowcase[],
  products: IProduct[],
): Partial<IProduct>[][] {
  const findProductById = (id: string): IProduct =>
    products.find(
      product => product._id.toString() === id.toString(),
    ) as IProduct;

  return showcases.map(({ productsIds, discountPercentage }) => {
    if (productsIds && productsIds.length > 0) {
      return productsIds.map((id): Pick<
        IProduct,
        '_id' | 'price' | 'name' | 'images'
      > => {
        const product = findProductById(id);

        const discount = (product.price * discountPercentage) / 100;

        const roundToTwoDecimalPlaces = (value: number) =>
          Math.round(value * 100) / 100;

        const newPrice = roundToTwoDecimalPlaces(product.price - discount);

        return {
          _id: product._id,
          price: newPrice,
          name: product.name,
          images: product.images,
        };
      });
    }

    return [];
  });
}

async function getShowcaseProducts(
  showcases: readonly IShowcase[],
): Promise<Partial<IProduct>[][]> {
  const productsIds = getProductsIdsFromShowcases(showcases);

  const products = await productsRepository.findByIds(productsIds);

  return applyDiscountPercentageOnProductsPrices(showcases, products);
}

export function getProductsDataLoader() {
  return new Dataloader(getShowcaseProducts);
}
