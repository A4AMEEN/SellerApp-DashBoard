import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';
import { Integration } from '../../interfaces/dashboardData';

@Component({
  selector: 'app-integration-list',
  standalone: false,
  templateUrl: './integration-list.component.html',
  styleUrl: './integration-list.component.css'
})
export class IntegrationListComponent implements OnInit, OnDestroy {
  isDark = true;
  integrations: Integration[] = [];
  private _countrySub: Subscription;

  constructor(
    private _themeService: ThemeService,
    private _dashboardService: DashboardService
  ) {
    this._themeService.isDarkTheme$.subscribe(
      isDark => this.isDark = isDark
    );

    this._countrySub = this._dashboardService.getSelectedCountry().subscribe((country) => {
      this._dashboardService.getCountryData(country).subscribe(countryData => {
        this.integrations = countryData.integrations;
        console.log("integrations",this.integrations);
        
      });
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this._countrySub.unsubscribe();
  }
}