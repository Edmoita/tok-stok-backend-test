const UpdateProductInput = `
"Parâmetros para atualizar um produto."
input UpdateProductInput {
  "Nome"
  name: String
  "Preço"
  price: Float
  "Lista de URLs de imagens"
  images: [String]
}
`;

const UpdateProductType = `
"Resposta da mutation que atualiza um produto"
type UpdateProduct {
  "Produto atualizado"
  product: Product
}
`;

const updateProductMutation = `
"Mutation que atualiza um produto."
updateProduct(
  "Regex: /^[0-9a-fA-F]{24}$/"
  id: ID!,
  input: UpdateProductInput!
): UpdateProduct!
`;

export const types = UpdateProductType;

export const inputs = UpdateProductInput;

export const Mutation = updateProductMutation;
