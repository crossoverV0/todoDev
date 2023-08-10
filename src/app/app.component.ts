import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd  } from '@angular/router';
import { HeaderComponent } from "./components/organisms/header/header.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionGridOutline, ionTimeOutline } from '@ng-icons/ionicons';
import { filter, map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-header>
      <div tabs class="flex items-center h-full gap-3 px-6">
        <ng-icon
          routerLink="/"
          class="cursor-pointer hover:scale-110 active:scale-90 transition duration-150 ease-in-out" 
          name="ionTimeOutline" 
          [size]="currentRoute() === '/' ? '1.4rem' : '1.3rem'" 
          [color]="currentRoute() === '/' ? '#F5F5F5' : '#949596'"
        ></ng-icon>
        <ng-icon 
          routerLink="/historico" 
          class="cursor-pointer hover:scale-110 active:scale-90 transition duration-150 ease-in-out" 
          name="ionGridOutline" 
          [size]="currentRoute() === '/historico' ? '1.4rem' : '1.3rem'" 
          [color]="currentRoute() === '/historico' ? '#F5F5F5' : '#949596'"
        ></ng-icon>
      </div>
    </app-header>
    <div class="px-14 bg-dark-1 pt-20 min-h-screen">
      <router-outlet></router-outlet>
    </div>
  `,
  viewProviders: [provideIcons({ ionGridOutline, ionTimeOutline })],
  imports: [NgIconComponent, RouterOutlet, HeaderComponent, RouterLink]
})
export class AppComponent implements OnInit{
  #router = inject(Router)
  
  quantity = signal<number>(1);
  currentRoute = signal<string>('');

  addOne(){
    this.quantity.update( v => v + 1 )
  }

  ngOnInit(): void {
    this.getCurrentRoute()
  }

  getCurrentRoute(){
    this.#router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url)
    )
    .subscribe({
      next: (event: any) => this.currentRoute.set(event)
    });
  }
}
