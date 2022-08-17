import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { LogInComponent } from './modules/log-in/components/log-in/log-in.component'; 
import { CatalogPageComponent } from './modules/catalogs/components/catalog-page/catalog-page.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogInComponent,
    canActivate: [LoginGuardGuard]
  },
  {path: 'catalog', component: CatalogPageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
