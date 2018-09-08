import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './application/store';


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
