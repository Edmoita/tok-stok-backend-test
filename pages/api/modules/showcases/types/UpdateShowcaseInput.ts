import { IShowcase } from './IShowcase';

/** Parâmetros para atualização de Vitrine */
export type UpdateShowcaseInput = {
  /** Nome */
  name?: IShowcase['name'];
  /** Porcentagem de desconto */
  discountPercentage?: IShowcase['discountPercentage'];
  /** Ids dos Produtos */
  productsIds?: IShowcase['productsIds'];
};
