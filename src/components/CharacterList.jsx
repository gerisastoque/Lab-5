import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const { apiCharacters, customCharacters, searchQuery } = useSelector(
    state => state.characters
  );

  const filteredApiCharacters = apiCharacters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCustomCharacters = customCharacters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="character-list">
      <h2>API Characters</h2>
      <div className="characters-grid">
        {filteredApiCharacters.map(character => (
          <CharacterCard key={character.id} character={character} isCustom={false} />
        ))}
      </div>

      <h2>Custom Characters</h2>
      <div className="characters-grid">
        {filteredCustomCharacters.map(character => (
          <CharacterCard key={character.id} character={character} isCustom={true} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;