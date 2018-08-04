import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../animations';
import {Observable} from 'rxjs';
import {Hero, HeroService} from './hero.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    hero$: Observable<Hero>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) {
    }

    ngOnInit() {
        // 一进来界面就先获取id对应的Hero 有两种方式
        // 第一种(最保险的方式)
        // this.hero$ = this.route.paramMap.pipe(
        //     switchMap((params: ParamMap) =>
        //         this.service.getHero(params.get('id')))
        // );
        // 第二种方式，快照的方式
        const id = this.route.snapshot.paramMap.get('id');
        this.hero$ = this.service.getHero(id);
    }

    gotoHeroes(hero: Hero) {
        const heroId = hero ? hero.id : null;
        // id 和 foo 不会影响到/heroes的路由
        this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
    }

}
