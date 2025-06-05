import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCustomCharacter } from '../store/slices/charactersSlice';

const CharacterCard = ({ character, isCustom }) => {
  const dispatch = useDispatch();
  const { userType } = useSelector(state => state.characters);

  const handleDelete = () => {
    if (isCustom) {
      dispatch(deleteCustomCharacter(character.id));
    }
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin?.name}</p>
      
      {userType === 'admin' && (
        <div className="character-actions">
          {isCustom && (
            <>
              <Link to={`/edit/${character.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterCard;