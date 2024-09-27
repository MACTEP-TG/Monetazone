import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppPopUpState {
    isShown: boolean;
    applicationType: 'fea' | 'swift' | 'cash';
}

const initialState: AppPopUpState = {
    isShown: false,
    applicationType: 'fea'
}

const appPopUpSlice = createSlice({
    name: 'appPopUpSlice',
    initialState,
    reducers: {
        showAppPopUp: (state: AppPopUpState) => {
            state.isShown = true
        },
        hideAppPopUp: (state: AppPopUpState) => {
            state.isShown = false
        },
        setAppType: (state: AppPopUpState, action:  PayloadAction<'fea' | 'swift' | 'cash'>) => {
            state.applicationType = action.payload

        },
        resetAppType: (state: AppPopUpState) => {
            state.applicationType = 'fea'
        }
    }
})

export const {showAppPopUp,
    hideAppPopUp,
    changeAppType,
    setAppType} = appPopUpSlice.actions;

export const appPopUpReducer = appPopUpSlice.reducer;
