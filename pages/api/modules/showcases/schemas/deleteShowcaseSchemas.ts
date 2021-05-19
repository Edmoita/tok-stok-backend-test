const DeleteShowcaseType = `
"Resposta da mutation que deleta uma vitrine"
type DeleteShowcase {
  "Id do Vitrine deletada"
  _id: ID
}`;

const deleteShowcaseMutation = `
"Deleta uma vitrine."
deleteShowcase(id: ID!): DeleteShowcase!`;

export const types = DeleteShowcaseType;

export const Mutation = deleteShowcaseMutation;
