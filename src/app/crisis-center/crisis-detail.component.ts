import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../animations';
import {Crisis} from './crisis.service';
import {ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized} from '@angular/router';
import {DialogService} from '../dialog.service';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css'],
    animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) {
        // 监听路由变化
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                console.log('NavigationStart');
            } else if (event instanceof NavigationEnd) {
                console.log('NavigationEnd');
            } else if (event instanceof NavigationCancel) {
                console.log('NavigationCancel');
            } else if (event instanceof NavigationError) {
                console.log('NavigationError');
            } else if (event instanceof RoutesRecognized) {
                console.log('NavigationError');
            }
        });

        this.router.events.pipe(
            filter((event: Event) => event instanceof NavigationEnd)
        ).subscribe(x => console.log(x));
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.route.data
            .subscribe((data: { crisis: Crisis }) => {
                console.log(data);
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            });
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        const crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
    }

}
