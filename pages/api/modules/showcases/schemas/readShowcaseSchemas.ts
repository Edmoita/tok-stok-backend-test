const ReadShowcaseType = `
"Resposta da query que detalha uma vitrine"
type ReadShowcase {
  "Vitrine consultada"
  showcase: Showcase
}
`;

const readShowcaseQuery = `
"Detalha uma vitrine."
readShowcase(
  "Regex: /^[0-9a-fA-F]{24}$/"
  id: ID!
): ReadShowcase
`;

export const types = ReadShowcaseType;

export const Query = readShowcaseQuery;
