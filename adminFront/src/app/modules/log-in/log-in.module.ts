import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './components/log-in/log-in.component'



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule, 
    CommonModule
  ],
})
export class LogInModule { }
