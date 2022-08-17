import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './modules/log-in/components/log-in/log-in.component'
import { AdminPanelComponent } from './modules/admin-panel/admin-panel/admin-panel.component';

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
