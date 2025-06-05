import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apiCharacters: [],
  customCharacters: [],
  editingCharacter: null,
  searchQuery: '',
  userType: 'admin' 
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setApiCharacters(state, action) {
      state.apiCharacters = action.payload;
    },
    addCustomCharacter(state, action) {
      state.customCharacters.push(action.payload);
    },
    updateCustomCharacter(state, action) {
      const index = state.customCharacters.findIndex(
        char => char.id === action.payload.id
      );
      if (index !== -1) {
        state.customCharacters[index] = action.payload;
      }
    },
    deleteCustomCharacter(state, action) {
      state.customCharacters = state.customCharacters.filter(
        char => char.id !== action.payload
      );
    },
    setEditingCharacter(state, action) {
      state.editingCharacter = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    }
  }
});

export const {
  setApiCharacters,
  addCustomCharacter,
  updateCustomCharacter,
  deleteCustomCharacter,
  setEditingCharacter,
  setSearchQuery,
  setUserType
} = charactersSlice.actions;

export default charactersSlice.reducer;