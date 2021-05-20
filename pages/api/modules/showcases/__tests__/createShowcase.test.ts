import faker from 'faker';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as showcasesRepository from '../repositories/showcasesRepository';
import * as productsRepository from '../../products/repositories/productsRepository';

const createShowcaseMutation = `
mutation CreateShowcase($input: CreateShowcaseInput!) {
  createShowcase(input: $input) {
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

describe('Create Showcase Tests', () => {
  test('Create Showcase', async () => {
    const product1 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const showcase = {
      name: faker.commerce.department(),
      discountPercentage: faker.datatype.number({ min: 0, max: 100 }),
      productsIds: [product1.id],
    };

    const response = await gCall({
      source: createShowcaseMutation,
      variableValues: {
        input: showcase,
      },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.createShowcase.showcase;

    expect(received).toMatchObject({
      name: showcase.name,
      discountPercentage: showcase.discountPercentage,
    });
    expect(received.productsIds[0]).toBe(showcase.productsIds[0]);

    const dBShowcase = await showcasesRepository.findById(received._id);
    expect(dBShowcase).not.toBeNull();
  });
});
