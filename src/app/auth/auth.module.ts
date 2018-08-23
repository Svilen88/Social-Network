import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent
    ]
})
export class AuthModule { }
