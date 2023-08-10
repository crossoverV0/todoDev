import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/organisms/header/header.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionGridOutline, ionTimeOutline } from '@ng-icons/ionicons';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-header [q]="quantity()">
      <div tabs class="flex items-center h-full gap-3 px-6">
        <ng-icon
          routerLink="/" 
          class="cursor-pointer hover:scale-110 active:scale-90 transition duration-150 ease-in-out" 
          name="ionTimeOutline" 
          [size]="'1.3rem'" 
          [color]="'#949596'"
        ></ng-icon>
        <ng-icon 
          routerLink="/historico" 
          class="cursor-pointer hover:scale-110 active:scale-90 transition duration-150 ease-in-out" 
          name="ionGridOutline" 
          [size]="'1.3rem'" 
          [color]="'#949596'"
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
export class AppComponent {
  quantity = signal<number>(1);

  addOne(){
    this.quantity.update( v => v + 1 )
  }
}
