import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomCharacter, updateCustomCharacter, setEditingCharacter } from '../store/slices/charactersSlice';

const CharacterForm = ({ character }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isEditing = !!character;

  const [formData, setFormData] = React.useState({
    name: character?.name || '',
    status: character?.status || 'Alive',
    species: character?.species || 'Human'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateCustomCharacter({ ...character, ...formData }));
    } else {
      const newCharacter = {
        id: Date.now(),
        ...formData,
        origin: { name: 'Earth (Custom)' },
        image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
      };
      dispatch(addCustomCharacter(newCharacter));
    }
    dispatch(setEditingCharacter(null));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <label>Species:</label>
        <input
          type="text"
          name="species"
          value={formData.species}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default CharacterForm;