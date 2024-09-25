import { createSlice} from '@reduxjs/toolkit';

interface AppPopUpState {
    isShown: boolean;
}

const initialState: AppPopUpState = {
    isShown: false
}

const appPopUpSlice = createSlice({
    name: 'appPopUpSlice',
    initialState,
    reducers: {
        showAppPopUp: (state: AppPopUpState) => {
            state.isShown = true
        }
    }
})

export const {showAppPopUp} = appPopUpSlice.actions;
export const appPopUpReducer = appPopUpSlice.reducer;
