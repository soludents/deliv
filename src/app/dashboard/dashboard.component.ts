import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { IProduct } from "../models/product";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  products$: Observable<IProduct[]>;
  selectedProductForDetail$: Observable<IProduct>;
  pagination = 0;

  constructor(private readonly productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsFromRest().subscribe(data => {
      if (data) {
        this.getProducts();
      }
    });

    this.getSelectedProductForDetail();
    // this.productService.sortProductsBy("name");
  }

  onAdd(data) {}

  onSelectChange(data: string) {
    const sortBy = data.toLowerCase();
    this.productService.sortProductsBy(sortBy);
    this.getProducts();
  }

  onSearch(searchTerm: string) {
    this.productService.searchProductsBy(searchTerm);
    this.getProducts();
  }

  onPaginate(pageNumber: number) {
    this.pagination = pageNumber;
  }

  onProductSave(product: IProduct) {
    this.productService.updateProduct(product);
    this.getSelectedProductForDetail();
    this.getProducts();
    alert(`Thank you for updating product ${product.name}`);
  }

  setSelectedProductForEdit(product: IProduct) {
    this.productService.setSelectedProductForDetail(product);
    this.getSelectedProductForDetail();
  }

  getProducts() {
    this.products$ = this.productService.getProducts();
  }

  getSelectedProductForDetail() {
    this.selectedProductForDetail$ = this.productService.getSelectedProductForDetail();
  }
}
