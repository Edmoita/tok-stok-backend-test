import faker from 'faker';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as showcasesRepository from '../repositories/showcasesRepository';
import * as productsRepository from '../../products/repositories/productsRepository';

const listShowcasesQuery = `
query ListShowcases {
  listShowcases {
    showcases {
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

describe('List Showcases Tests', () => {
  test('List Showcases', async () => {
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

    const showcase1 = await showcasesRepository.create({
      name: faker.commerce.department(),
      discountPercentage: faker.datatype.number({ min: 0, max: 100 }),
      productsIds: [product2.id],
    });

    const showcase2 = await showcasesRepository.create({
      name: faker.commerce.department(),
      discountPercentage: faker.datatype.number({ min: 0, max: 100 }),
      productsIds: [product1.id],
    });

    const response = await gCall({ source: listShowcasesQuery });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.listShowcases.showcases;

    expect(received).toHaveLength(2);
    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: showcase1.id,
        }),
        expect.objectContaining({
          _id: showcase2.id,
        }),
      ]),
    );
  });
});
