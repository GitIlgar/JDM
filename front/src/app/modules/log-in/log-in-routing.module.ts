import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from '../home/components/home/home.component';

const routes: Routes = [
    {path: 'new-pass', component: NewPassComponent},
    {path: 'sign-up', component: SignUpComponent},
    // {path: 'home', component: HomeComponent},
    
    // {path: 'login', component: LogInComponent},
    {path: '', component: LogInComponent}
    
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class LogInRoutingModule {}