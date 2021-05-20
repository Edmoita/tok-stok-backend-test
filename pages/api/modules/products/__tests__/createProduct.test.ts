import faker from 'faker';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as productsRepository from '../repositories/productsRepository';

const createProductMutation = `
mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    product {
      _id
      name
      price
      images
    }
  }
}
`;

describe('Create Product Tests', () => {
  test('Create Product', async () => {
    const product = {
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    };

    const response = await gCall({
      source: createProductMutation,
      variableValues: {
        input: product,
      },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.createProduct.product;

    expect(received).toMatchObject({
      name: product.name,
      price: product.price,
    });
    expect(received.images[0]).toBe(product.images[0]);

    const dBProduct = await productsRepository.findById(received._id);
    expect(dBProduct).not.toBeNull();
  });
});
