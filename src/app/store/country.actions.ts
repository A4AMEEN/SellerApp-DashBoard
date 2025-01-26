import { createAction, props } from '@ngrx/store';
import { Country } from '../interfaces/types';

export const selectCountry = createAction(
    '[Topbar] Select Country',
    props<{ country: Country }>()
);