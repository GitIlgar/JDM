import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogInRoutingModule } from '../log-in/log-in-routing.module';
import { AppModule } from 'src/app/app.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { NewPassComponent } from './components/new-pass/new-pass.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    LogInComponent,
    NewPassComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LogInRoutingModule,
    GlobalComponentsModule,
    // HomeModule
  ]

})
export class LogInModule { }
