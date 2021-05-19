const UpdateShowcaseInput = `
"Parâmetros para atualizar uma vitrine."
input UpdateShowcaseInput {
  "Nome"
  name: String
  "Porcentagem de desconto"
  discountPercentage: Float
  "Ids dos produtos"
  productsIds: [ID!]
}
`;

const UpdateShowcaseType = `
"Resposta da mutation que atualiza uma vitrine"
type UpdateShowcase {
  "Vitrine atualizada"
  showcase: Showcase
}
`;

const updateShowcaseMutation = `
"Mutation que atualiza uma vitrine."
updateShowcase(
  "Regex: /^[0-9a-fA-F]{24}$/"
  id: ID!,
  input: UpdateShowcaseInput!
): UpdateShowcase!
`;

export const types = UpdateShowcaseType;

export const inputs = UpdateShowcaseInput;

export const Mutation = updateShowcaseMutation;
