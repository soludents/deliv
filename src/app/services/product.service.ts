import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { of } from "rxjs/internal/observable/of";

import { IProduct } from "../models/product";
import { parseProducts } from "../util/product.util";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private headers: HttpHeaders;
  private selectedProductForDetail: IProduct;
  private products: IProduct[];
  private tempProducts: IProduct[];

  constructor(private readonly httpClient: HttpClient) {
    this.headers = new HttpHeaders()
      .append("Content-Type", "application/json")
      .append("Accept", "application/json");
  }

  private apiEndpoint = "https://msbit-exam-products-store.firebaseio.com";

  getProductsFromRest(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(`${this.apiEndpoint}/deliveryProducts/products.json`, {
        headers: this.headers
      })
      .pipe(
        debounceTime(200),
        map(result => {
          this.products = parseProducts(result);
          this.tempProducts = this.products;
          return parseProducts(result);
        })
      );
  }

  getProducts(): Observable<IProduct[]> {
    return of(this.products);
  }

  getSelectedProductForDetail() {
    return of(this.selectedProductForDetail);
  }

  setSelectedProductForDetail(product: IProduct) {
    this.selectedProductForDetail = product;
  }

  sortProductsBy(parameter: string) {
    this.products = this.products.sort((a, b) => {
      return a[parameter] === b[parameter]
        ? 0
        : a[parameter] < b[parameter]
        ? -1
        : 1;
    });
  }

  searchProductsBy(searchTerm: string) {
    this.products = this.tempProducts.filter(product => {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  updateProduct(product: IProduct) {
    const modifiedProduct = { ...this.selectedProductForDetail, ...product };
    this.products = this.products.map(productItem => {
      return productItem.id === modifiedProduct.id
        ? modifiedProduct
        : productItem;
    });
    this.tempProducts = this.products;
    this.selectedProductForDetail = modifiedProduct;
  }
}
