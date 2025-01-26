import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-cards',
  standalone: false,

  templateUrl: './stat-cards.component.html',
  styleUrl: './stat-cards.component.css'
})
export class StatCardsComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() percentage!: number;
  Math = Math;
  isDark = true;

  formatValue(value: number): string {
    if (this.title === 'Conversion rate') {
      return value.toFixed(2) + '%';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  getTrendClass(): string {
    return this.percentage >= 0 ? 'trend-up' : 'trend-down';
  }
}