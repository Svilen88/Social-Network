import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { ApplicationModule } from './application/application.module';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    {
        path: 'auth', children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    {
        path: 'application', loadChildren: () => ApplicationModule, canActivate: [AuthGuard]
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
