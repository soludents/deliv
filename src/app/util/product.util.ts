import { IProduct } from '../models/product';

export function parseProducts(products: IProduct[]) {

  let parsedProducts = [];

  products.forEach(product => {

    if (product.type === 1) {
      parsedProducts.push(product.fedex);
    } else if (product.type === 3) {
      parsedProducts.push(product);
    } else {
      parsedProducts = [...parsedProducts, ...product.ups];
    }
  });

  return parsedProducts;
}
