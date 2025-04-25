// src/components/FavoriteList.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/features/books/booksSlice';
import { Typography, Grid } from '@mui/material';
import BookItem from './BookItem';

function FavoriteList() {
  const dispatch = useDispatch();
  const { books, favorites } = useSelector(state => state.books);

  const favoriteBooks = books.filter(book => favorites.includes(book.id));

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      <Typography variant="h5" sx={{ my: 2 }}>Libros Favoritos</Typography>
      {favoriteBooks.length === 0 ? (
        <Typography variant="body1">No tienes libros favoritos.</Typography>
      ) : (
        <Grid container spacing={2}>
          {favoriteBooks.map(book => (
            <Grid item xs={12} md={6} key={book.id}>
              <BookItem
                book={book}
                isFavorite={true}
                onToggleFavorite={handleToggleFavorite}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default FavoriteList;
