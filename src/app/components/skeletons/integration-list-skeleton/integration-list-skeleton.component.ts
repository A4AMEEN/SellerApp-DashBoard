import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-integration-list-skeleton',
  standalone: false,
  template: `
    <div class="rounded-lg p-6 animate-pulse" 
         [ngClass]="{'bg-gray-100': !isDark}"
         [style.background-color]="isDark ? 'var(--card-bg)' : ''">
      <div class="h-4 bg-gray-300 w-1/2 rounded mb-4"></div>
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <div class="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class IntegrationListSkeletonComponent {
  @Input() isDark = false;
}