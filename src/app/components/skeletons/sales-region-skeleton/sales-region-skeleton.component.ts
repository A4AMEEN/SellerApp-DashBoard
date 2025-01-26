import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-sales-region-skeleton',
  standalone: false,
  template: `
    <div class="rounded-lg p-6 animate-pulse" 
         [ngClass]="{'bg-gray-100': !isDark}"
         [style.background-color]="isDark ? 'var(--card-bg)' : ''">
      <div class="h-4 bg-gray-300 w-1/2 rounded mb-4"></div>
      <div class="h-[295px] bg-gray-200 rounded"></div>
    </div>
  `
})
export class SalesRegionSkeletonComponent {
  @Input() isDark = false;
}