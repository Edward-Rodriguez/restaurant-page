import './homepage.css';
import Image from '../../assets/images/logo-ice-cream.svg';

export default function homepageLoad() {
  const contentDiv = document.querySelector('#content');

  // navigation bar
  const nav = document.querySelector('#navbar');
  const navList = document.createElement('ul');

  // icon & heading (nav items)
  const restaurantName = 'Chill Bliss Ice Cream Shop';
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
  nav.appendChild(navList);

  // header
  const header = document.createElement('header');
  const headline = document.createElement('p');
  const headlineText = document.createElement('em');
  headlineText.textContent = `Indulge in Scoopfuls of Frozen Delight at ${restaurantName}`;
  headline.classList.add('headline');
  headline.appendChild(headlineText);
  header.append(headline);

  contentDiv.append(header);
}
