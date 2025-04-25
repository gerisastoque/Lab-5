// src/features/books/booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  books: [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      category: "Ciencia ficción",
      synopsis: "A dystopian novel set in a totalitarian society ruled by Big Brother."
    },
    {
      id: 2,
      title: "Don Quijote",
      author: "Miguel de Cervantes",
      year: 1605,
      category: "Clásico",
      synopsis: "A nobleman becomes a knight and seeks adventures based on chivalric romances."
    },
    {
      id: 3,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967,
      category: "Realismo mágico",
      synopsis: "The story of the Buendía family over seven generations in the fictional town of Macondo."
    },
    {
      id: 4,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: 1953,
      category: "Ciencia ficción",
      synopsis: "In a future where books are banned, firemen burn any that are found."
    },
    {
      id: 5,
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      year: 1813,
      category: "Romance",
      synopsis: "A classic tale of love and misunderstanding set in the English countryside."
    },
    {
      id: 6,
      title: "El nombre de la rosa",
      author: "Umberto Eco",
      year: 1980,
      category: "Misterio",
      synopsis: "A friar investigates a series of murders in a 14th-century Italian monastery."
    }
  ],
  favorites: savedFavorites,
  category: 'Todos',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const bookId = action.payload;
      if (state.favorites.includes(bookId)) {
        state.favorites = state.favorites.filter(id => id !== bookId);
      } else {
        state.favorites.push(bookId);
      }
    
      // Persistir en localStorage
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  }    
});

export const { toggleFavorite, setCategory } = booksSlice.actions;
export default booksSlice.reducer;
