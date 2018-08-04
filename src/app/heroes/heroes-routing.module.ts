import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

const heroesRoutes: Routes = [
    {path: 'heroes', component: HeroListComponent},
    {path: 'hero/:id', component: HeroDetailComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(heroesRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class HeroesRoutingModule {
}
