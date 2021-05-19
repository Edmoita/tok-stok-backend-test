import ProductTypeSchema from './ProductTypeSchema';
import * as createProductSchemas from './createProductSchemas';
import * as updateProductSchemas from './updateProductSchemas';
import * as deleteProductSchemas from './deleteProductSchemas';
import * as listProductsSchemas from './listProductsSchemas';
import * as readProductSchemas from './readProductSchemas';

export const types = `
${ProductTypeSchema}
${createProductSchemas.types}
${listProductsSchemas.types}
${readProductSchemas.types}
${updateProductSchemas.types}
${deleteProductSchemas.types}
`;

export const inputs = `
${createProductSchemas.inputs}
${updateProductSchemas.inputs}
`;

export const Query = `
${listProductsSchemas.Query}
${readProductSchemas.Query}
`;

export const Mutation = `
${createProductSchemas.Mutation}
${updateProductSchemas.Mutation}
${deleteProductSchemas.Mutation}
`;
