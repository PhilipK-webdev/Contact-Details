import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList(state, action) {
      state.userList = action.payload;
    },
    addUser(state, action) {
      state.userList.push(action.payload);
    },
    editUser(state, action) {
      const { id, name, email, title } = action.payload;
      const userIndex = state.userList.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.userList[userIndex] = { id, name, email, title };
      }
    },
    deleteUser(state, action) {
      const id = action.payload;
      state.userList = state.userList.filter((user) => user.id !== id);
    },
  },
});

export const { setUserList, addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
