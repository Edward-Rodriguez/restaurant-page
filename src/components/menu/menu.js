import './menu.css';
import items from './items.json';
import images from './images-info.json';

export default function loadMenu() {
  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.classList.add('menu-container');
  items.forEach((item) => {
    const itemDiv = itemContainer(item);
    menuItemsContainer.appendChild(itemDiv);
  });
  return menuItemsContainer;
}

function itemContainer(item) {
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const description = document.createElement('p');
  const imageElement = document.createElement('img');
  const image = images.find((image) => image.id === item.imageId);
  console.log(image);

  container.classList.add('menu-item');
  header.textContent = item.name;
  description.textContent = item.description;
  imageElement.src = require(`./${image.name}`);
  imageElement.alt = image.alt;
  container.append(
    header,
    imageElement,
    generateAttribution(image),
    description
  );

  function generateAttribution(imageObj) {
    const attributionDiv = document.createElement('div');
    const artistLink = document.createElement('a');
    const siteLink = document.createElement('a');

    attributionDiv.classList.add('attribution');
    artistLink.href = imageObj.sourceLink;
    artistLink.textContent = imageObj.artist;
    siteLink.href = imageObj.siteLink;
    siteLink.textContent = imageObj.site;
    attributionDiv.append('Photo by ', artistLink, ' on ', siteLink);

    return attributionDiv;
  }

  return container;
}
