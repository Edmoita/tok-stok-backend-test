import faker from 'faker';
import { Types } from 'mongoose';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as productsRepository from '../repositories/productsRepository';

const readProductQuery = `
query readProduct($id: ID!) {
  readProduct(id: $id) {
    product {
      _id
      name
      price
      images
    }
  }
}
`;

describe('Read Product Tests', () => {
  test('Product not found', async () => {
    const fakeId = Types.ObjectId().toHexString();

    const response = await gCall({
      source: readProductQuery,
      variableValues: { id: fakeId },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.readProduct.product;

    expect(received).toBeNull();
  });

  test('Read Product', async () => {
    const product = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const response = await gCall({
      source: readProductQuery,
      variableValues: { id: product.id },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.readProduct.product;

    expect(received).toMatchObject({
      _id: product.id,
      name: product.name,
      price: product.price,
    });
    expect(received.images[0]).toBe(product.images[0]);
  });
});
