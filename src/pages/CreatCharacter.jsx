import React from 'react';
import CharacterForm from '../components/CharacterForm';
import Navbar from '../components/Navbar';

const CreateCharacter = () => {
  return (
    <div>
      <Navbar />
      <h1>Create New Character</h1>
      <CharacterForm />
    </div>
  );
};

export default CreateCharacter;