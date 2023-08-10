import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckbox, ionCheckboxOutline, ionGridOutline } from '@ng-icons/ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  viewProviders: [provideIcons({ ionCheckbox, ionCheckboxOutline, ionGridOutline })],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() q: number = 0
}
