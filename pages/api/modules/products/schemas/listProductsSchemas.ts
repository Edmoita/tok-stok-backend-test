const ListProductsType = `
"Resposta da query que lista produtos."
type ListProducts {
  "Lista de produtos"
  products: [Product]
}
`;

const listProductsQuery = `
"Lista produtos."
listProducts: ListProducts
`;

export const types = ListProductsType;

export const Query = listProductsQuery;
