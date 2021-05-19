import ShowcaseTypeSchema from './ShowcaseTypeSchema';
import * as createShowcaseSchemas from './createShowcaseSchemas';
import * as updateShowcaseSchemas from './updateShowcaseSchemas';
import * as deleteShowcaseSchemas from './deleteShowcaseSchemas';
import * as listShowcasesSchemas from './listShowcasesSchemas';
import * as readShowcaseSchemas from './readShowcaseSchemas';

export const types = `
${ShowcaseTypeSchema}
${createShowcaseSchemas.types}
${listShowcasesSchemas.types}
${readShowcaseSchemas.types}
${updateShowcaseSchemas.types}
${deleteShowcaseSchemas.types}
`;

export const inputs = `
${createShowcaseSchemas.inputs}
${updateShowcaseSchemas.inputs}
`;

export const Query = `
${listShowcasesSchemas.Query}
${readShowcaseSchemas.Query}
`;

export const Mutation = `
${createShowcaseSchemas.Mutation}
${updateShowcaseSchemas.Mutation}
${deleteShowcaseSchemas.Mutation}
`;
