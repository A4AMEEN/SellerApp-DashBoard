import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { StatCardsComponent } from './components/stat-cards/stat-cards.component';
import { SalesGraphComponent } from './components/sales-graph/sales-graph.component';
import { SalesRegionComponent } from './components/sales-region/sales-region.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { IntegrationListComponent } from './components/integration-list/integration-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StatsLoadComponent } from './components/skeletons/stats-load/stats-load.component';
import { SalesGraphSkeletonComponent } from './components/skeletons/sales-graph-skeleton/sales-graph-skeleton.component';
import { SalesRegionSkeletonComponent } from './components/skeletons/sales-region-skeleton/sales-region-skeleton.component';
import { UserRegistrationSkeletonComponent } from './components/skeletons/user-registration-skeleton/user-registration-skeleton.component';
import { IntegrationListSkeletonComponent } from './components/skeletons/integration-list-skeleton/integration-list-skeleton.component';
import { HttpClientModule } from '@angular/common/http';
import { dashboardReducer } from './store/dashboard.reducer';
import { StoreModule } from '@ngrx/store';
import { countryReducer } from './store/country.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    StatCardsComponent,
    SalesGraphComponent,
    SalesRegionComponent,
    UserRegistrationComponent,
    IntegrationListComponent,
    StatsLoadComponent,
    SalesGraphSkeletonComponent,
    SalesRegionSkeletonComponent,
    UserRegistrationSkeletonComponent,
    IntegrationListComponent,
    IntegrationListSkeletonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      country: countryReducer 
    })
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
