// src/components/BookItem.jsx

import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

function BookItem({ book, isFavorite, onToggleFavorite }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author} ({book.year})
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {book.category}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {book.synopsis}
        </Typography>
        <Button
          variant={isFavorite ? 'contained' : 'outlined'}
          onClick={() => onToggleFavorite(book.id)}
        >
          {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default BookItem;
