import { productResolvers } from '../../modules/products/resolvers';
import { showcaseResolvers } from '../../modules/showcases/resolvers';

const resolvers = {
  Query: {
    wakeUp: (): string => 'Tok&Stok Test API',
    ...productResolvers.Query,
    ...showcaseResolvers.Query,
  },
  Mutation: {
    ...productResolvers.Mutation,
    ...showcaseResolvers.Mutation,
  },
  ...showcaseResolvers.references,
};

export default resolvers;
