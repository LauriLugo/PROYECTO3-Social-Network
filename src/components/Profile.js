import { getAuth, signOut } from 'firebase/auth';

import profileImg from '../media/ui-user-profile.svg';
import logoutImg from '../media/logout.svg';
import homeSrc from '../media/home-icon.svg';
import profileSrc from '../media/profile-icon.svg';
import communitiesSrc from '../media/communities-icon.svg';
import logoIcon from '../media/logo-icon.svg';

export const Profile = (onNavigate) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'profile-wrapper';

  const profileDiv = document.createElement('div');
  profileDiv.className = 'profile-div';

  const profileContainer = document.createElement('picture');
  profileContainer.className = 'profile-container';

  const profileContainerImg = document.createElement('img');
  profileContainerImg.className = 'profile-image';
  profileContainerImg.src = profileImg;

  profileContainer.appendChild(profileContainerImg);
  profileDiv.appendChild(profileContainer);

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

  // We create the navbar
  const navBar = document.createElement('nav');
  navBar.className = 'nav-bar';

  // We proceed then to create the icon containers for the icon images.

  const profileIconContainer = document.createElement('picture');
  profileIconContainer.className = 'icon-container';
  profileIconContainer.addEventListener('click', () => {
    onNavigate('/profile');
  });

  const profileIcon = document.createElement('img');
  profileIcon.className = 'icon';
  profileIcon.src = profileSrc;

  profileIconContainer.appendChild(profileIcon);

  const homeIconContainer = document.createElement('picture');
  homeIconContainer.className = 'icon-container';
  homeIconContainer.addEventListener('click', () => {
    onNavigate('/wall');
  });

  const homeIcon = document.createElement('img');
  homeIcon.className = 'icon';
  homeIcon.src = homeSrc;

  homeIconContainer.appendChild(homeIcon);

  const communitiesIconContainer = document.createElement('picture');
  communitiesIconContainer.className = 'icon-container';

  const communitiesIcon = document.createElement('img');
  communitiesIcon.className = 'icon';
  communitiesIcon.src = communitiesSrc;

  communitiesIconContainer.appendChild(communitiesIcon);

  const logoIconImg = document.createElement('img');
  logoIconImg.className = 'logo-icon';
  logoIconImg.src = logoIcon;

  const navBarWrapper = document.createElement('div');
  navBarWrapper.className = 'nav-wrapper';

  navBarWrapper.appendChild(profileIconContainer);
  navBarWrapper.appendChild(homeIconContainer);
  navBarWrapper.appendChild(communitiesIconContainer);

  navBar.appendChild(navBarWrapper);
  navBar.appendChild(logoIconImg);

  wrapper.appendChild(navBar);
  wrapper.appendChild(profileDiv);
  wrapper.appendChild(logoutButton);

  return wrapper;
};
