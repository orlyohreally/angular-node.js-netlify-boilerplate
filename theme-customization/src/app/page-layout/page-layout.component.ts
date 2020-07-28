import { Component, OnInit, ViewChild } from '@angular/core';
import { filter, map, mergeMap, share, shareReplay } from 'rxjs/operators';
import {
  NavigationEnd,
  Router,
  ActivatedRoute,
  RouterEvent
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  title: string;
  smallScreen: Observable<BreakpointState>;
  opened = false;

  @ViewChild('sidenav', { static: true }) sideNavEl: MatSidenav;

  readonly appName = 'Theme Customization';

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.setTitle();
  }

  ngOnInit(): void {
    this.smallScreen = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(shareReplay());
  }

  private setTitle() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe((event: RouterEvent) => {
        this.title = event['title'];
        this.titleService.setTitle(`${this.title} | ${this.appName}`);

        if (this.sideNavEl.mode !== 'side') {
          this.sideNavEl.close();
        }
      });
  }
}
