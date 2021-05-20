const ShowcaseType = `
"Vitrine"
type Showcase {
  "Id"
  _id: ID!
  "Nome"
  name: String!
  "Porcentagem de desconto"
  discountPercentage: Float!
  "Ids dos produtos"
  productsIds: [ID!]!
  "Produtos"
  products: [Product!]
}`;

export default ShowcaseType;
