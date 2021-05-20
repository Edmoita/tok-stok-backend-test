import { gCall } from './testHelpers';

const testWakeUp = async (): Promise<void> => {
  const response = await gCall({
    source: 'query { wakeUp }',
  });

  if (response.errors) {
    console.error(response.errors);
  }

  expect(response).toMatchObject({
    data: {
      wakeUp: 'Tok&Stok Test API',
    },
  });
};

/** Testes de exemplo */
describe('Example Tests', () => {
  test('200 Server up - GRAPHQL', testWakeUp);
});
