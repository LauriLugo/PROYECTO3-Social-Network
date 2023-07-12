import { getAuth, signOut } from 'firebase/auth';

import profileImg from '../media/ui-user-profile.svg';
import logoutImg from '../media/logout.svg';

export const Profile = (onNavigate) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'profile-wrapper';

  const profileContainer = document.createElement('picture');
  profileContainer.className = 'profile-container';

  const profileContainerImg = document.createElement('img');
  profileContainerImg.className = 'profile-image';
  profileContainerImg.src = profileImg;

  profileContainer.appendChild(profileContainerImg);

  const logoutButton = document.createElement('button');
  logoutButton.className = 'logout-button';
  logoutButton.textContent = 'Cerrar sesion';
  logoutButton.addEventListener('click', () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      onNavigate('/');
      // Sign-out successful.
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      console.log(errorCode, errorMessage);
    });
  });

  const logoutContainer = document.createElement('picture');
  logoutContainer.className = 'logout-container';

  const logoutIcon = document.createElement('img');
  logoutIcon.className = 'logout-icon';
  logoutIcon.src = logoutImg;

  logoutContainer.appendChild(logoutIcon);

  logoutButton.appendChild(logoutContainer);

  wrapper.appendChild(profileContainer);
  wrapper.appendChild(logoutButton);

  return wrapper;
};
