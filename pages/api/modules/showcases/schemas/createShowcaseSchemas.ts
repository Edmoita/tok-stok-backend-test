const CreateShowcaseInput = `
"Parâmetros para cadastro de vitrine"
input CreateShowcaseInput {
  "Nome"
  name: String!
  "Porcentagem de desconto"
  discountPercentage: Float!
  "Ids dos produtos"
  productsIds: [ID!]!
}
`;

const CreateShowcaseType = `
"Resposta da mutation que cria uma vitrine"
type CreateShowcase {
  "Vitrine criado"
  showcase: Showcase
}`;

const createShowcaseMutation = `
"Cria uma vitrine"
createShowcase(input: CreateShowcaseInput!): CreateShowcase!`;

export const types = `
${CreateShowcaseType}
`;

export const inputs = `
${CreateShowcaseInput}
`;

export const Mutation = createShowcaseMutation;
