import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CrisisListComponent} from './crisis-center/crisis-list.component';
import {HeroListComponent} from './heroes/hero-list.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        CrisisListComponent,
        HeroListComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
