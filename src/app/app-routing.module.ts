import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {NotFoundComponent} from './not-found.component';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {AdminModule} from './admin/admin.module';
import {AuthGuard} from './auth-guard.service';
import {ComposeMessageComponent} from './compose-message.component';

const appRoutes: Routes = [
    {
        path: 'crisis-center',
        loadChildren: () => CrisisCenterModule,
        data: {preload: true}
    },
    {
        path: 'admin',
        loadChildren: () => AdminModule,
        canLoad: [AuthGuard]
    },
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debug调试使用
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
