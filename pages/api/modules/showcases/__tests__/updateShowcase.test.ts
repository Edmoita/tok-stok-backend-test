import faker from 'faker';
import { Types } from 'mongoose';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as showcasesRepository from '../repositories/showcasesRepository';
import * as productsRepository from '../../products/repositories/productsRepository';

const updateShowcaseMutation = `
mutation updateShowcase($id: ID!, $input: UpdateShowcaseInput!) {
  updateShowcase(id: $id, input: $input) {
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

describe('Update Showcase Tests', () => {
  test('Showcase not found', async () => {
    const fakeId = Types.ObjectId().toHexString();

    const product1 = await productsRepository.create({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      images: [faker.image.fashion()],
    });

    const input = {
      name: faker.commerce.department(),
      discountPercentage: faker.datatype.number({ min: 0, max: 100 }),
      productsIds: [product1.id],
    };

    const response = await gCall({
      source: updateShowcaseMutation,
      variableValues: { id: fakeId, input },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.updateShowcase.showcase;

    expect(received).toBeNull();
  });

  test('Update Showcase', async () => {
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

    const input = {
      name: faker.lorem.word(),
      discountPercentage: faker.datatype.number({ min: 30, max: 50 }),
      productsIds: [product1.id],
    };

    const response = await gCall({
      source: updateShowcaseMutation,
      variableValues: { id: showcase.id, input },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.updateShowcase.showcase;

    expect(received).toMatchObject({
      _id: showcase.id,
      name: input.name,
      discountPercentage: input.discountPercentage,
    });
    expect(received.productsIds[0]).toBe(input.productsIds[0]);

    const dBShowcase = await showcasesRepository.findById(received._id);
    expect(dBShowcase?.name).toBe(input.name);
  });
});
