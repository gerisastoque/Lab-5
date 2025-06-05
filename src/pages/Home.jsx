import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiCharacters } from '../store/slices/charactersSlice';
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/Searchbar';
import Navbar from '../components/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const { apiCharacters } = useSelector(state => state.characters);

  useEffect(() => {
    if (apiCharacters.length === 0) {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
          const first20Characters = data.results.slice(0, 20);
          dispatch(setApiCharacters(first20Characters));
        })
        .catch(error => console.error('Error fetching characters:', error));
    }
  }, [dispatch, apiCharacters.length]);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <CharacterList />
    </div>
  );
};

export default Home;