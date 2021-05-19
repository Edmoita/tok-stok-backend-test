const DeleteProductType = `
"Resposta da mutation que deleta um produto"
type DeleteProduct {
  "Id do Produto deletado"
  _id: ID
}`;

const deleteProductMutation = `
"Deleta um produto."
deleteProduct(id: ID!): DeleteProduct!`;

export const types = DeleteProductType;

export const Mutation = deleteProductMutation;
