import { createAction, props } from '@ngrx/store';
import { Integration } from '../interfaces/dashboardData';

export const setSelectedCountry = createAction(
    '[Dashboard] Set Selected Country',
    props<{ country: string }>()
);

export const loadIntegrations = createAction(
    '[Dashboard] Load Integrations',
    props<{ country: string }>()
);

export const loadIntegrationsSuccess = createAction(
    '[Dashboard] Load Integrations Success',
    props<{ integrations: Integration[] }>()
);

export const loadIntegrationsFailed = createAction(
    '[Dashboard] Load Integrations Failed',
    props<{ error: string }>()
);

export const selectIntegration = createAction(
    '[Dashboard] Select Integration',
    props<{ id: string }>()
);