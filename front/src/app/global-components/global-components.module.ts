import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerComponent } from './components/burger/burger.component';
import { LogoComponent } from './components/logo/logo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    FormComponent,
    FooterComponent,
    BurgerComponent,
    LogoComponent,
    ProfileIconComponent,
    BtnLoginComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    FormComponent,
    FooterComponent,
    BurgerComponent,
    LogoComponent,
    ProfileIconComponent,
    BtnLoginComponent,
    CardComponent
  ]
})
export class GlobalComponentsModule { }