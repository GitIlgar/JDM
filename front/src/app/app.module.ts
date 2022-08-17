import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { LogInModule } from './modules/log-in/log-in.module';
import { AppComponent } from './app.component';
import { GlobalComponentsModule } from './global-components/global-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogsModule } from './modules/catalogs/catalogs.module';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient} from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    LogInModule,
    GlobalComponentsModule,
    ReactiveFormsModule,
    CatalogsModule,
    HttpClientModule
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
