import './nav.css';
import Image from './logo-ice-cream.svg';
import { restaurantName } from '../global-vars/global-vars';

export default function loadNav() {
  const navList = document.createElement('ul');

  // icon & heading (nav items)
  const heading = document.createElement('h1');
  heading.textContent = restaurantName;
  heading.setAttribute('id', 'heading');
  const icon = document.createElement('img');
  icon.setAttribute('id', 'logo');
  icon.src = Image;
  [icon, heading].forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');
    listItem.appendChild(item);
    navList.appendChild(listItem);
  });

  // menu links (nav items)
  const menuItems = ['About', 'Menu', 'Hours & Locations', 'Contact'];
  menuItems.forEach((navItem) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');
    const anchor = document.createElement('a');
    anchor.textContent = navItem;
    anchor.setAttribute(
      'id',
      navItem.replace(/[!@#\$%\^\&*\)\(+=._\-\s]+/g, '').toLowerCase()
    );
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
  });

  return navList;
}
