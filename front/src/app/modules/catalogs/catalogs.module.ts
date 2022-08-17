import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { CatalogsRoutingModule } from './catalogs-routing.module';
import { AppModule } from 'src/app/app.module';
import { TitleButtonComponent } from './components/title-button/title-button.component';

@NgModule({
  declarations: [
    CatalogPageComponent,
    SearchBarComponent,
    TitleButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    GlobalComponentsModule,
    CatalogsRoutingModule
  ]
})
export class CatalogsModule { }
