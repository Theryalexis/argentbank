import React, { useEffect, useState } from 'react';
import EditProfileForm from './EditProfilForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../Redux/api/callAuth.jsx';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token); 
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUserProfile(token, dispatch); // Utilisez le token récupéré ici
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération du profil :', error);
      }
    };

    fetchData();
  }, [token, dispatch]); // Ajoutez `token` à la liste des dépendances
  

  const handleEditButtonClick = () => {
    setIsEditing(true);
  }; 


  return (
    <main className="main bg-dark">
      <div className="header">
        <div>
        {!isEditing && <h1>Welcome back<br />{user.userName}</h1>}
        </div>
        {isEditing ? (
          <EditProfileForm onCancel={() => setIsEditing(false)} />
        ) : (
          <div className='edit-button-container'>
            <button className="edit-button" onClick={handleEditButtonClick}>
              Edit Name
            </button>
            
          </div>
        )}
      </div>
    </main>
  );
};

export default UserProfile;