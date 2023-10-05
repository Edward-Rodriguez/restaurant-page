import './homepage.css';
import { restaurantName } from '../global-vars/global-vars';

export default function loadHomepage() {
  // header
  const header = document.createElement('header');
  const headline = document.createElement('p');
  const headlineText = document.createElement('em');
  headlineText.textContent = `Indulge in Scoopfuls of Frozen Delight at ${restaurantName}`;
  headline.classList.add('headline');
  headline.appendChild(headlineText);
  header.append(headline);

  return header;
}
