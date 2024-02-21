import { navigateTo } from "../router.js";

export const secondaryNav = () => {
  const sectionHomeButton = document.createElement('section');
  sectionHomeButton.classList.add('nav');
  const homeButton = document.createElement('nav');
  homeButton.classList.add('secondaryNav');
  const img = document.createElement('img');
  img.className = 'imgHome';
  img.src = './media/home.png';

  homeButton.appendChild(img);
  sectionHomeButton.appendChild(homeButton);
  const homeBtn = sectionHomeButton.querySelector('.secondaryNav');
  homeBtn.addEventListener('click', () => navigateTo('/'));
  return sectionHomeButton;
};
