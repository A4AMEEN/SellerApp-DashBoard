import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { RegionData } from '../../interfaces/types';

@Component({
  selector: 'app-sales-region',
  standalone: false,
  templateUrl: './sales-region.component.html',
  styleUrl: './sales-region.component.css'
})
export class SalesRegionComponent implements OnInit, AfterViewInit {
  @ViewChild('regionChart') chartCanvas!: ElementRef;
  private _chart!: Chart;
  isDark = true;
  regionData: RegionData[] = [];
  private _countrySub: Subscription;

  constructor(
    private _themeService: ThemeService,
    private _dashboardService: DashboardService
  ) {
    this._themeService.isDarkTheme$.subscribe(
      isDark => {
        this.isDark = isDark;
        if (this._chart) {
          this.updateChartColors();
        }
      }
    );

    this._countrySub = this._dashboardService.getSelectedCountry().subscribe((country) => {
      this._dashboardService.getCountryData(country).subscribe(countryData => {
        this.regionData = countryData.regionData;

        if (this._chart) {
          this.updateChartData();
        }
      });
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement;
    this._chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: this.regionData.map(item => `${item.region}: `),
        datasets: [
          {
            label: 'Sales',
            data: this.regionData.map(item => item.value),
            fill: true,
            backgroundColor: this.isDark ? 'rgba(107, 122, 219, 0.3)' : 'rgba(107, 122, 219, 0.2)',
            borderColor: 'rgb(107, 122, 219)',
            pointBackgroundColor: 'rgb(107, 122, 219)',
            pointBorderColor: this.isDark ? '#1a1b2e' : '#ffffff',
            pointHoverBackgroundColor: this.isDark ? '#1a1b2e' : '#ffffff',
            pointHoverBorderColor: 'rgb(107, 122, 219)',
            borderWidth: 2,
            pointRadius: 4
          }
        ]
      },
      options: this.getChartOptions()
    });
  }

  updateChartData() {
    if (this._chart) {
      this._chart.data.labels = this.regionData.map(item => `${item.region}: `);
      this._chart.data.datasets[0].data = this.regionData.map(item => item.value);
      this._chart.update();
    }
  }

  getChartOptions() {
    const values = [2201, 2865, 2475, 1762, 1749, 1591];

    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          angleLines: {
            color: this.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
          },
          grid: {
            color: this.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
          },
          pointLabels: {
            color: this.isDark ? '#ffffff' : '#1a1b2e',
            font: {
              size: 8.5,
              family: "'Inter', sans-serif"
            },
            callback: function (value: string, index: number) {
              return `${value}\n${values[index].toLocaleString()}`;
            },
            padding: 25
          },
          ticks: {
            display: false,
            backdropColor: 'transparent'
          },
          min: 0,
          max: 3000
        }
      }
    };
  }

  updateChartColors() {
    if (this._chart) {
      this._chart.options = this.getChartOptions();
      this._chart.update();
    }
  }
}