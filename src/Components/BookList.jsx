// src/components/BookList.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, setCategory } from '../redux/features/books/booksSlice';
import { Select, MenuItem, Typography, Grid } from '@mui/material';
import BookItem from './BookItem';

function BookList() {
  const dispatch = useDispatch();
  const { books, favorites, category } = useSelector(state => state.books);

  const filteredBooks =
    category === 'Todos' ? books : books.filter(book => book.category === category);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      <Typography variant="h5" sx={{ my: 2 }}>Lista de Libros</Typography>

      <Select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        sx={{ mb: 2, minWidth: 200 }}
      >
        <MenuItem value="Todos">Todos</MenuItem>
        <MenuItem value="Ciencia ficción">Ciencia ficción</MenuItem>
        <MenuItem value="Clásico">Clásico</MenuItem>
        <MenuItem value="Realismo mágico">Realismo mágico</MenuItem>
        <MenuItem value="Romance">Romance</MenuItem>
        <MenuItem value="Misterio">Misterio</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {filteredBooks.map(book => (
          <Grid item xs={12} md={6} key={book.id}>
            <BookItem
              book={book}
              isFavorite={favorites.includes(book.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BookList;
