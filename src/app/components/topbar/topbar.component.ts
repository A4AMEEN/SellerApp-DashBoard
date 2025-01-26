import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CountryActions from '../../store/country.actions'
import { AppState, Country } from '../../interfaces/types';
import { DashboardService } from '../../services/dashboard.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  countries: Country[] = [
    { code: 'USA', name: 'USA', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg' },
    { code: 'CAN', name: 'Canada', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/ca.svg' },
    { code: 'DEU', name: 'Germany', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/de.svg' },
    { code: 'IND', name: 'India', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/in.svg' }
  ];

  selectedCountry!: Country;
  isOpen = false;
  isDark = true;

  constructor(
    private _store: Store<AppState>,
    private _themeService: ThemeService,
    private _dashboardService: DashboardService
  ) {
    this._themeService.isDarkTheme$.subscribe(
      isDark => this.isDark = isDark
    );

    this._store.pipe(
      select(state => state.country.selectedCountry)
    ).subscribe(country => {
      this.selectedCountry = country || this.countries[0];
    });
  }

  ngOnInit() {
    this._store.dispatch(CountryActions.selectCountry({ country: this.countries[0] }));
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectCountry(country: Country) {
    this._store.dispatch(CountryActions.selectCountry({ country }));
    this.isOpen = false;
    this._dashboardService.setSelectedCountry(country.code);
  }
}