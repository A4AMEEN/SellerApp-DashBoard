import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard.service';
import * as IntegrationActions from '../store/dashboard.actions';

@Injectable()
export class IntegrationEffects {
    loadIntegrations$ = createEffect(() => this.actions$.pipe(
        ofType(IntegrationActions.loadIntegrations),
        mergeMap(action =>
            this.dashboardService.getCountryData(action.country).pipe(
                map(countryData => IntegrationActions.loadIntegrationsSuccess({
                    integrations: countryData.integrations
                })),
                catchError(error => of(IntegrationActions.loadIntegrationsFailed({
                    error: error.message
                })))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService
    ) { }
}