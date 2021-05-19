const CreateProductInput = `
"Parâmetros para cadastro de produto"
input CreateProductInput {
  "Nome"
  name: String!
  "Preço"
  price: Float!
  "Lista de URLs de imagens"
  images: [String]!
}
`;

const CreateProductType = `
"Resposta da mutation que cria um produto"
type CreateProduct {
  "Produto criado"
  product: Product
}`;

const createProductMutation = `
"Cria um produto"
createProduct(input: CreateProductInput!): CreateProduct!`;

export const types = `
${CreateProductType}
`;

export const inputs = `
${CreateProductInput}
`;

export const Mutation = createProductMutation;
