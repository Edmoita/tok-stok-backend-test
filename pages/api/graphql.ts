import { ApolloServer } from 'apollo-server-micro';

import typeDefs from './shared/graphql/schemas';
import resolvers from './shared/graphql/resolvers';
import { getProductsDataLoader } from './shared/graphql/dataLoaders';
import './shared/db';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    loaders: {
      productsLoader: getProductsDataLoader(),
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
