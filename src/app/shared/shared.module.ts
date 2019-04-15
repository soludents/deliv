import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { SearchComponent } from './components/search/search.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { StoreItemDetailComponent } from './components/store-item-detail/store-item-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SelectComponent,
    SearchComponent,
    StoreItemComponent,
    StoreItemDetailComponent,
    PaginationComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    SelectComponent,
    SearchComponent,
    StoreItemComponent,
    StoreItemDetailComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}
