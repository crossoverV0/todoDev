import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionGrid, ionGridOutline, ionTime, ionTimeOutline } from '@ng-icons/ionicons';
import { filter, map } from 'rxjs';
import { HeaderComponent } from "./components/organisms/header/header.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-header>
      <div tabs class="flex items-center h-full gap-3 px-6">
        <ng-icon
          routerLink="/"
          class="cursor-pointer hover:scale-110 active:scale-90 transition duration-150 ease-in-out drop-shadow-xl"
          [name]="'ionTimeOutline'" 
          [size]="currentRoute() === '/' ? '1.4rem' : '1.3rem'" 
          [color]="currentRoute() === '/' ? '#d897f3' : '#473350'"
        ></ng-icon>
        <ng-icon
          routerLink="/historico" 
          class="cursor-pointer hover:scale-110 active:scale-90 transition duration-150 ease-in-out" 
          [name]="'ionGridOutline'" 
          [size]="currentRoute() === '/historico' ? '1.4rem' : '1.3rem'" 
          [color]="currentRoute() === '/historico' ? '#d897f3' : '#473350'"
        ></ng-icon>
      </div>
    </app-header>
    <div class="px-14 pt-20 min-h-screen" style="background-color: #0a0118;">
      <router-outlet></router-outlet>
    </div>
  `,
  viewProviders: [provideIcons({ ionGridOutline, ionTimeOutline, ionTime, ionGrid})],
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
