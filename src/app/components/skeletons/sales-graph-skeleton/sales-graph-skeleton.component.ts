import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sales-graph-skeleton',
  standalone: false,
  template: `
    <div class="rounded-lg p-6 animate-pulse" 
         [ngClass]="{'bg-gray-100': !isDark}"
         [style.background-color]="isDark ? 'var(--card-bg)' : ''">
      <div class="flex justify-between mb-4">
        <div class="h-4 bg-gray-300 w-1/4 rounded"></div>
        <div class="h-4 bg-gray-300 w-1/4 rounded"></div>
      </div>
      <div class="h-[280px] bg-gray-200 rounded"></div>
    </div>
  `
})
export class SalesGraphSkeletonComponent {
  @Input() isDark = false;
}