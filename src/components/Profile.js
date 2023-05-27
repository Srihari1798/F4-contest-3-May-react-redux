import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../actions/userActions";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signup');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    
    // Dispatch the logout action to clear user state
    dispatch(logout());
    
    // Redirect to the signup page
    navigate('/');
  };

  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      {user && (
        <>
          <h1>Full Name: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Password: {user.password}</h1>
        </>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

