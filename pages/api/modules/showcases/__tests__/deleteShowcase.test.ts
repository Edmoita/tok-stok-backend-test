import faker from 'faker';
import { Types } from 'mongoose';

import { gCall } from '../../../shared/__tests__/testHelpers';
import * as showcasesRepository from '../repositories/showcasesRepository';
import * as productsRepository from '../../products/repositories/productsRepository';

const deleteShowcaseQuery = `
mutation deleteShowcase($id: ID!) {
  deleteShowcase(id: $id) {
    _id
  }
}
`;

describe('Delete Showcase Tests', () => {
  test('Showcase not found', async () => {
    const fakeId = Types.ObjectId().toHexString();

    const response = await gCall({
      source: deleteShowcaseQuery,
      variableValues: { id: fakeId },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.deleteShowcase._id;

    expect(received).toBeNull();
  });

  test('Delete Showcase', async () => {
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
      source: deleteShowcaseQuery,
      variableValues: { id: showcase.id },
    });

    if (response.errors) {
      console.error(response.errors);
    }

    const received = response.data?.deleteShowcase._id;

    expect(received).toBe(showcase.id);

    const dBShowcase = await showcasesRepository.findById(showcase.id);
    expect(dBShowcase).toBeNull();
  });
});
