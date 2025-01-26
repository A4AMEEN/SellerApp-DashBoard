import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, catchError, tap, delay } from "rxjs/operators";
import { COUNTRY_DATA, CountryDashboardData } from "../interfaces/dashboardData";
import { BASE_URL } from "../interfaces/types";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private selectedCountrySubject = new BehaviorSubject<string>("USA");
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {
    if (typeof window !== "undefined") {
      const savedCountry = localStorage.getItem("selectedCountry");
      if (savedCountry) {
        this.setSelectedCountry(savedCountry);
      }
    }
  }

  getSelectedCountry(): Observable<string> {
    return this.selectedCountrySubject.asObservable();
  }

  setSelectedCountry(country: string): void {
    this.loadingSubject.next(true);

    this.http.get<any[]>(`${BASE_URL}/countries`).pipe(
      delay(500),
      map((countries) => countries.find((c) => c.code === country)),
      tap((countryData) => {
        if (countryData) {
          this.selectedCountrySubject.next(country);
          localStorage.setItem("selectedCountry", country);
        } else {
          console.warn(`Country ${country} not found. Defaulting to USA.`);
          this.selectedCountrySubject.next("USA");
          localStorage.setItem("selectedCountry", "USA");
        }
        this.loadingSubject.next(false);
      }),
      catchError((error) => {
        console.error("Error fetching country data", error);
        this.selectedCountrySubject.next("USA");
        this.loadingSubject.next(false);
        return of(null);
      })
    ).subscribe();
  }

  getCountryData(country?: string): Observable<CountryDashboardData> {
    const selectedCountry = country || this.selectedCountrySubject.value;

    return this.http.get<any[]>(`${BASE_URL}/countries`).pipe(
      delay(500),
      map((countries) => {
        const countryData = countries.find((c) => c.code === selectedCountry);
        return countryData ? countryData.data : this.getDefaultCountryData();
      }),
      catchError((error) => {
        console.error("Error fetching country data", error);
        return of(this.getDefaultCountryData());
      })
    );
  }

  private getDefaultCountryData(): CountryDashboardData {
    return COUNTRY_DATA["USA"];
  }
}
