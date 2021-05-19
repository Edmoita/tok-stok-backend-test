import { IShowcase } from './IShowcase';

/** Parâmetros para cadastro de Vitrine */
export type CreateShowcaseInput = {
  /** Nome */
  name: IShowcase['name'];
  /** Porcentagem de desconto */
  discountPercentage: IShowcase['discountPercentage'];
  /** Ids dos Produtos */
  productsIds: IShowcase['productsIds'];
};
