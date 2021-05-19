import { IProduct } from './IProduct';

/** Parâmetros para atualização de Produto */
export type UpdateProductInput = {
  /** Nome */
  name?: IProduct['name'];
  /** Preço */
  price?: IProduct['price'];
  /** Lista de URLs de imagens */
  images?: IProduct['images'];
};
