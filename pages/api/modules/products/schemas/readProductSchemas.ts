const ReadProductType = `
"Resposta da query que detalha um produto"
type ReadProduct {
  "Produto consultado"
  product: Product
}
`;

const readProductQuery = `
"Detalha um produto."
readProduct(
  "Regex: /^[0-9a-fA-F]{24}$/"
  id: ID!
): ReadProduct
`;

export const types = ReadProductType;

export const Query = readProductQuery;
