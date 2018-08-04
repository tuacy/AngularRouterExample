import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Crisis, CrisisService} from './crisis.service';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {

    constructor(private cs: CrisisService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {

        // 获取到url里面的id
        const id = route.paramMap.get('id');
        return this.cs.getCrisis(id).pipe(
            take(1),
            map(crisis => {
                if (crisis) {
                    return crisis;
                } else { // id not found
                    this.router.navigate(['/crisis-center']);
                    return null;
                }
            })
        );
    }
}
