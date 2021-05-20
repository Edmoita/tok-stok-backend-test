import faker from 'faker';
import { Types } from 'mongoose';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as productsRepository from '../repositories/productsRepository';

const deleteProductQuery = `
mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id) {
    _id
  }
}
`;

describe('Delete Product Tests', () => {
  test('Product not found', async () => {
    const fakeId = Types.ObjectId().toHexString();

    const response = await gCall({
      source: deleteProductQuery,
      variableValues: { id: fakeId },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.deleteProduct._id;

    expect(received).toBeNull();
  });

  test('Delete Product', async () => {
    const product = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const response = await gCall({
      source: deleteProductQuery,
      variableValues: { id: product.id },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.deleteProduct._id;

    expect(received).toBe(product.id);

    const dBProduct = await productsRepository.findById(product.id);
    expect(dBProduct).toBeNull();
  });
});
