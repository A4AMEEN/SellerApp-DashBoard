import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';
import { Registration } from '../../interfaces/types';

@Component({
  selector: 'app-user-registration',
  standalone: false,
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  circumference = Math.PI * 88;
  dashOffset = 0;
  isDark = true;
  totalUsers = 0;
  premiumUsers = 0;
  basicUsers = 0;
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
        this.updateUserRegistration(countryData.userRegistration);
      });
    });
  }

  ngOnInit() { }

  updateUserRegistration(registration: Registration) {

    this.totalUsers = registration.total;
    this.premiumUsers = registration.premium;
    this.basicUsers = registration.basic;

    const percentage = (this.premiumUsers / this.totalUsers);
    this.dashOffset = this.circumference * (1 - percentage);
  }

  ngOnDestroy() {
    this._countrySub.unsubscribe();
  }
}