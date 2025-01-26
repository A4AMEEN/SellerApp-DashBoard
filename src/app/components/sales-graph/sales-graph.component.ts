import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, type OnInit } from "@angular/core"
import { Chart, TooltipItem } from 'chart.js/auto';
import { ThemeService } from "../../services/theme.service";
import { Subscription } from "rxjs";
import { DashboardService } from "../../services/dashboard.service";
import { SalesData } from "../../interfaces/types";

@Component({
  selector: 'app-sales-graph',
  standalone: false,
  templateUrl: './sales-graph.component.html',
  styleUrl: './sales-graph.component.css'
})
export class SalesGraphComponent implements OnInit, AfterViewInit, OnDestroy {
  isDark = true;
  chart: Chart | undefined;
  private _countrySub: Subscription;
  private _salesData: SalesData[] = [];
  @ViewChild('salesChart', { static: false }) salesChartRef!: ElementRef<HTMLCanvasElement>;

  constructor(
    private _themeService: ThemeService,
    private _dashboardService: DashboardService
  ) {
    this._themeService.isDarkTheme$.subscribe(
      isDark => {
        this.isDark = isDark;
        if (this.chart) {
          this.updateChartColors();
        }
      }
    );

    this._countrySub = this._dashboardService.getSelectedCountry().subscribe((country) => {
      this._dashboardService.getCountryData(country).subscribe(countryData => {
        this._salesData = countryData.salesData;
        console.log("salesdaa", this._salesData);

        if (this.chart) {
          this.updateChartData();
        }
      });
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.salesChartRef) {
      this.createChart();
    }
  }

  createChart() {
    const canvasElement = this.salesChartRef?.nativeElement;
    if (!canvasElement) return;

    const ctx = canvasElement.getContext('2d');
    const gradient1 = ctx?.createLinearGradient(0, 0, 0, 400);
    const gradient2 = ctx?.createLinearGradient(0, 0, 0, 400);

    if (gradient1) {
      gradient1.addColorStop(0, 'rgba(67, 24, 255, 0.2)');
      gradient1.addColorStop(1, 'rgba(67, 24, 255, 0)');
    }

    if (gradient2) {
      gradient2.addColorStop(0, 'rgba(255, 181, 71, 0.2)');
      gradient2.addColorStop(1, 'rgba(255, 181, 71, 0)');
    }

    this.chart = new Chart(canvasElement, {
      type: 'line',
      data: {
        labels: this._salesData.map(item => item.month + ' 2024'),
        datasets: [
          {
            label: 'Total Revenue',
            data: this._salesData.map(item => item.revenue),
            borderColor: '#4318FF',
            backgroundColor: gradient1,
            tension: 0.4,
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#4318FF',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
          },
          {
            label: 'Total Target',
            data: this._salesData.map(item => item.target),
            borderColor: '#FFB547',
            backgroundColor: gradient2,
            tension: 0.4,
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#FFB547',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
          }
        ]
      },
      options: this.getChartOptions()
    });
  }

  updateChartData() {
    if (this.chart) {
      this.chart.data.labels = this._salesData.map(item => item.month + ' 2024');
      this.chart.data.datasets[0].data = this._salesData.map(item => item.revenue);
      this.chart.data.datasets[1].data = this._salesData.map(item => item.target);
      this.chart.update();
    }
  }
  getChartOptions() {
    const gridColor = this.isDark ? 'rgba(247, 248, 250, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = this.isDark ? '#A3AED0' : '#333';
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index' as const,
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#1B1B3F',
          titleColor: '#fff',
          bodyColor: '#fff',
          bodyFont: {
            size: 13
          },
          titleFont: {
            size: 13
          },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            title: function () {
              return 'Revenue';
            },
            label: function (context: TooltipItem<'line'>) {
              const value = context.raw as number;
              return `${context.dataset.label}: $${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: true,
            color: gridColor,
            drawTicks: false,
            drawBorder: false,
            lineWidth: 1
          },
          ticks: {
            color: textColor,
            font: {
              size: 11
            },
            padding: 8
          },
          border: {
            display: false
          }
        },
        y: {
          min: 0,
          max: 20000,
          position: 'right' as const,
          grid: {
            color: gridColor,
            drawTicks: false,
            drawBorder: false
          },
          border: {
            display: false
          },
          ticks: {
            color: textColor,
            font: {
              size: 11
            },
            padding: 10,
            stepSize: 10000,
            callback: function (value: any) {
              return `$${value / 1000}k`;
            }
          }
        }
      }
    };
  }

  getTotalRevenue(): number {
    return this._salesData.reduce((sum, item) => sum + item.revenue, 0);
  }

  getTotalTarget(): number {
    return this._salesData.reduce((sum, item) => sum + item.target, 0);
  }

  updateChartColors() {
    if (this.chart) {
      this.chart.options = this.getChartOptions();
      this.chart.update();
    }
  }

  ngOnDestroy() {
    this._countrySub.unsubscribe();
  }
}