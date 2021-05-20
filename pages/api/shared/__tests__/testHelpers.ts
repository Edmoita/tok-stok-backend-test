import { makeExecutableSchema } from 'apollo-server-micro';
import { graphql } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

import typeDefs from '../graphql/schemas';
import resolvers from '../graphql/resolvers';
import { getProductsDataLoader } from '../graphql/dataLoaders';

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}

export const gCall = async ({ source, variableValues }: Options) => {
  return graphql({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    source,
    variableValues,
    contextValue: {
      loaders: {
        productsLoader: getProductsDataLoader(),
      },
    },
  });
};
