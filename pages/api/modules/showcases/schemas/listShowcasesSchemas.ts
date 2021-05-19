const ListShowcasesType = `
"Resposta da query que lista vitrines."
type ListShowcases {
  "Lista de vitrines"
  showcases: [Showcase]
}
`;

const listShowcasesQuery = `
"Lista vitrines."
listShowcases: ListShowcases
`;

export const types = ListShowcasesType;

export const Query = listShowcasesQuery;
