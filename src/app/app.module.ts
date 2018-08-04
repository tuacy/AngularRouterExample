import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './not-found.component';
import {HeroesModule} from './heroes/heroes.module';
import {FormsModule} from '@angular/forms';
import {DialogService} from './dialog.service';
import {AuthService} from './auth.service';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        HeroesModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    providers: [
        DialogService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
