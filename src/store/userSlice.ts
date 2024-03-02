import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

export interface UserState {
	role: string;
	firstName: string;
	lastName: string;
}

const initialState: UserState = {
	role: '',
	firstName: '',
	lastName: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setRole: (state, action: PayloadAction<string>) => {
			state.role = action.payload;
		},
		loadUser: (state, action: PayloadAction<UserState>) => {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.role = action.payload.role;
		}
	}
});

export const { setRole, loadUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
