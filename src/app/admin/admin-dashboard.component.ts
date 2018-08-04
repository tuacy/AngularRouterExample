import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SelectivePreloadingStrategy} from '../selective-preloading-strategy';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: SelectivePreloadingStrategy
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParamMap
            .pipe(map(params => params.get('session_id') || 'None'));

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .pipe(map(fragment => fragment || 'None'));
    }

}
