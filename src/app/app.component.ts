import { Component, type OnInit } from "@angular/core"
import { DashboardService } from "./services/dashboard.service"
import { ThemeService } from "./services/theme.service";
import { switchMap } from 'rxjs/operators';
import { Stat } from "./interfaces/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  stats: Stat[] = [];
  isCollapsed = false;
  isDark = true;
  title!: string;
  isLoading = false;

  constructor(
    private dashboardService: DashboardService,
    private themeService: ThemeService
  ) {
    this.dashboardService.loading$.subscribe(
      loading => this.isLoading = loading
    );
  }

  ngOnInit() {
    this.dashboardService.getSelectedCountry().pipe(
      switchMap(country => this.dashboardService.getCountryData(country))
    ).subscribe(data => {
      this.stats = [
        { title: "Total income", value: data.stats.income.value, percentage: data.stats.income.percentage },
        { title: "Profit", value: data.stats.profit.value, percentage: data.stats.profit.percentage },
        { title: "Total views", value: data.stats.views.value, percentage: data.stats.views.percentage },
        { title: "Conversion rate", value: data.stats.conversion.value, percentage: data.stats.conversion.percentage },
      ];
    });

  }

  get sidebarClasses() {
    return this.isCollapsed ? "w-[70px]" : "w-[180px]"
  }

  get mainContentClasses() {
    return `flex-1 flex flex-col ${this.isCollapsed ? "ml-[7px]" : "ml-[200px]"}`
  }

  updateSidebarState(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed
  }
}