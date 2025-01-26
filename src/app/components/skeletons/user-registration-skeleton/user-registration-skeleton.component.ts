import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-registration-skeleton',
  standalone: false,
  template: `
    <div class="rounded-lg p-6 animate-pulse"[ngClass]="{'bg-gray-100': !isDark}"
         [style.background-color]="isDark ? 'var(--card-bg)' : ''">
      <div class="h-4 bg-gray-300 w-1/2 rounded mb-4"></div>
      <div class="h-[200px] bg-gray-200 rounded"></div>
      <div class="flex justify-between mt-4">
        <div class="h-4 bg-gray-300 w-1/4 rounded"></div>
        <div class="h-4 bg-gray-300 w-1/4 rounded"></div>
      </div>
    </div>
  `
})
export class UserRegistrationSkeletonComponent {
  @Input() isDark = false;
}


