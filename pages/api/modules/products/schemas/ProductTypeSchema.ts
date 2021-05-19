const ProductType = `
"Produto"
type Product {
  "Id"
  _id: ID!
  "Nome"
  name: String!
  "Preço"
  price: Float!
  "Lista de URLs de imagens"
  images: [String]!
}`;

export default ProductType;
