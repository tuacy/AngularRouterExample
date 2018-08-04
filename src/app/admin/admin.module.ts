import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {AdminComponent} from './admin.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AuthGuard} from '../auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminDashboardComponent,
        AdminComponent,
        ManageCrisesComponent,
        ManageHeroesComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class AdminModule {
}
