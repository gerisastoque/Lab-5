import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEditingCharacter } from '../store/slices/charactersSlice';
import CharacterForm from '../components/CharacterForm';
import Navbar from '../components/Navbar';

const EditCharacter = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { customCharacters } = useSelector(state => state.characters);

  useEffect(() => {
    const characterToEdit = customCharacters.find(char => char.id === Number(id));
    if (characterToEdit) {
      dispatch(setEditingCharacter(characterToEdit));
    }
  }, [id, customCharacters, dispatch]);

  return (
    <div>
      <Navbar />
      <h1>Edit Character</h1>
      <CharacterForm />
    </div>
  );
};

export default EditCharacter;