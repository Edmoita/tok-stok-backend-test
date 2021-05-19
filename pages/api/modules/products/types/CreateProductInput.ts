import { IProduct } from './IProduct';

/** Parâmetros para cadastro de Produto */
export type CreateProductInput = {
  /** Nome */
  name: IProduct['name'];
  /** Preço */
  price: IProduct['price'];
  /** Lista de URLs de imagens */
  images: IProduct['images'];
};
