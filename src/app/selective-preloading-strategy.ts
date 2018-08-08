import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

/**
 * 自定义预加载策略
 */
@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            // 预加载
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);

            // log the route path to the console
            console.log('Preloaded: ' + route.path);

            return load();
        } else {
            // 不预加载
            return of(null);
        }
    }
}
