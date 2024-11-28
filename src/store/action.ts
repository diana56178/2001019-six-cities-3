import {createAction} from '@reduxjs/toolkit';
import {TCity, TOffer} from '../components/blocks/offer-card/types.ts';

export const changeCity = createAction<{city: TCity}>('main/changeCity');
export const setActiveOffer = createAction<{offer: TOffer | null}>('main/setActiveOffer');
