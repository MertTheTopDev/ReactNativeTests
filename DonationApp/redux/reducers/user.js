import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: 'Mert',
  lastName: 'Turedu',
  userId: 1,
  isLoggedIn: false,
  profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVlcIF7r9BMWXY_cCQl5xJkStjB6o0HPpcg&s'
}

const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    login: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload}
    },
    resetToInitialState: () => {
      return initialState
    }
  },
})

export const { updateFirstName, resetToInitialState, login} = User.actions;
export default User.reducer;