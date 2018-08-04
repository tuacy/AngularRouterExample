import {Component, OnInit} from '@angular/core';
import {Hero, HeroService} from './hero.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

    heroes$: Observable<Hero[]>;
    // 当进入详情列表之海，在返回的是哈。想显示刚才选中的项
    selectedId: number;

    constructor(private service: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        // 获取列表
        this.heroes$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                console.log(this.selectedId);
                return this.service.getHeroes();
            })
        );
    }

}
