import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserType } from '../store/slices/charactersSlice';

const Navbar = () => {
  const { userType } = useSelector(state => state.characters);
  const dispatch = useDispatch();

  const toggleUserType = () => {
    dispatch(setUserType(userType === 'admin' ? 'user' : 'admin'));
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {userType === 'admin' && <Link to="/create">Create Character</Link>}
      <button onClick={toggleUserType}>
        Switch to {userType === 'admin' ? 'User' : 'Admin'} Mode
      </button>
    </nav>
  );
};

export default Navbar;