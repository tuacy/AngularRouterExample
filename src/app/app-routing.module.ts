import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {CrisisListComponent} from './crisis-center/crisis-list.component';
import {HeroListComponent} from './heroes/hero-list.component';
import {NotFoundComponent} from './not-found.component';

const appRoutes: Routes = [
    {path: 'crisis-center', component: CrisisListComponent},
    {path: 'heroes', component: HeroListComponent},
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debug调试使用
                preloadingStrategy: SelectivePreloadingStrategy,

            }
        ),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule {
}
