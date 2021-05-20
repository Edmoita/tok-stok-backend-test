import faker from 'faker';
import { Types } from 'mongoose';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as showcasesRepository from '../repositories/showcasesRepository';
import * as productsRepository from '../../products/repositories/productsRepository';

const readShowcaseQuery = `
query readShowcase($id: ID!) {
  readShowcase(id: $id) {
    showcase {
      _id
      name
      discountPercentage
      productsIds
      products {
        _id
        name
        price
        images
      }
    }
  }
}
`;

describe('Read Showcase Tests', () => {
  test('Showcase not found', async () => {
    const fakeId = Types.ObjectId().toHexString();

    const response = await gCall({
      source: readShowcaseQuery,
      variableValues: { id: fakeId },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.readShowcase.showcase;

    expect(received).toBeNull();
  });

  test('Read Showcase', async () => {
    const product1 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const showcase = await showcasesRepository.create({
      name: faker.commerce.department(),
      discountPercentage: faker.datatype.number({ min: 0, max: 100 }),
      productsIds: [product1.id],
    });

    const response = await gCall({
      source: readShowcaseQuery,
      variableValues: { id: showcase.id },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.readShowcase.showcase;

    expect(received).toMatchObject({
      name: showcase.name,
      discountPercentage: showcase.discountPercentage,
    });
    expect(received.productsIds[0]).toBe(showcase.productsIds[0]);
  });

  test('Check products prices with discount', async () => {
    const product1 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: 100,
      images: [faker.image.fashion()],
    });

    const product2 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: 133,
      images: [faker.image.fashion()],
    });

    const product3 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: 237,
      images: [faker.image.fashion()],
    });

    const showcase = await showcasesRepository.create({
      name: faker.commerce.department(),
      discountPercentage: 10,
      productsIds: [product1.id, product2.id, product3.id],
    });

    const response = await gCall({
      source: readShowcaseQuery,
      variableValues: { id: showcase.id },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.readShowcase.showcase;

    expect(received.products).toHaveLength(3);
    expect(received.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: product1.id,
          price: 90,
        }),
        expect.objectContaining({
          _id: product2.id,
          price: 119.7,
        }),
        expect.objectContaining({
          _id: product3.id,
          price: 213.3,
        }),
      ]),
    );
  });
});
