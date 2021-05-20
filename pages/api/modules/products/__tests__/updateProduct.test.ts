import faker from 'faker';
import { Types } from 'mongoose';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as productsRepository from '../repositories/productsRepository';

const updateProductMutation = `
mutation updateProduct($id: ID!, $input: UpdateProductInput!) {
  updateProduct(id: $id, input: $input) {
    product {
      _id
      name
      price
      images
    }
  }
}
`;

describe('Update Product Tests', () => {
  test('Product not found', async () => {
    const fakeId = Types.ObjectId().toHexString();

    const input = {
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    };

    const response = await gCall({
      source: updateProductMutation,
      variableValues: { id: fakeId, input },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.updateProduct.product;

    expect(received).toBeNull();
  });

  test('Update Product', async () => {
    const product = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const input = {
      name: faker.lorem.word(),
      price: faker.datatype.float({ min: 0 }),
      images: [faker.image.imageUrl()],
    };

    const response = await gCall({
      source: updateProductMutation,
      variableValues: { id: product.id, input },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.updateProduct.product;

    expect(received).toMatchObject({
      _id: product.id,
      name: input.name,
      price: input.price,
    });
    expect(received.images[0]).toBe(input.images[0]);

    const dBProduct = await productsRepository.findById(received._id);
    expect(dBProduct?.name).toBe(input.name);
  });
});
