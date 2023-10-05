import './homepage.css';
import { restaurant } from '../global-vars/global-vars';

export default function loadHomepage() {
  // header
  const header = document.createElement('header');
  const headline = document.createElement('p');
  const headlineText = document.createElement('em');
  headlineText.textContent = restaurant.headline;
  headline.classList.add('headline');
  headline.appendChild(headlineText);
  header.append(headline);

  return header;
}
