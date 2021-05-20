import faker from 'faker';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as productsRepository from '../repositories/productsRepository';

const listProductsQuery = `
query ListProducts {
  listProducts {
    products {
      _id
      name
      price
      images
    }
  }
}
`;

describe('List Products Tests', () => {
  test('List Products', async () => {
    const product1 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const product2 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const response = await gCall({ source: listProductsQuery });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.listProducts.products;

    expect(received).toHaveLength(2);
    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: product1.id,
        }),
        expect.objectContaining({
          _id: product2.id,
        }),
      ]),
    );
  });
});
