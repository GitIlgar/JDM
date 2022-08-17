import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogAccessoryComponent } from './components/catalog-accessory/catalog-accessory.component';
import { CatalogExpenseComponent } from './components/catalog-expense/catalog-expense.component';
import { CatalogSparesComponent } from './components/catalog-spares/catalog-spares.component';
import { SearchComponent } from './components/search/search.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    CatalogAccessoryComponent,
    CatalogExpenseComponent,
    CatalogSparesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    GlobalComponentsModule
  ],
})
export class HomeModule { }
