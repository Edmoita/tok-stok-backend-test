import { gql } from 'apollo-server-micro';

import * as productSchemas from '../../modules/products/schemas';
import * as showcaseSchemas from '../../modules/showcases/schemas';

const types = `
${productSchemas.types}
${showcaseSchemas.types}
`;

const inputs = `
${productSchemas.inputs}
${showcaseSchemas.inputs}
`;

const Query = `
type Query {
  "Acorda a API"
  wakeUp: String
  ${productSchemas.Query}
  ${showcaseSchemas.Query}
}
`;

const Mutation = `
type Mutation {
  ${productSchemas.Mutation}
  ${showcaseSchemas.Mutation}
}
`;

const typeDefs = gql`
  ${types}
  ${inputs}
  ${Query}
  ${Mutation}
`;

export default typeDefs;
