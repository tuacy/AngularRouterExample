import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';
import {CrisisDetailResolver} from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
    {
        path: '',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent,
                        canDeactivate: [CanDeactivateGuard],
                        resolve: {
                            crisis: CrisisDetailResolver
                        }
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(crisisCenterRoutes)
    ],
    declarations: [
    ],
    exports: [
        RouterModule
    ]
})
export class CrisisCenterRoutingModule {
}
