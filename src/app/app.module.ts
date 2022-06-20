import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppProductsComponent } from './components/app-products/app-products.component';
import { AppProductComponent } from './components/app-product/app-product.component';
import { SwitchBlockComponent } from './components/switch-block/switch-block.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductsComponent,
    AppProductComponent,
    SwitchBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
