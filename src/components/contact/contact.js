import image from './map-random.png';
import './contact.css';

export default function loadContact() {
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const contentDiv = document.createElement('div');
  container.classList.add('contact-container');
  contentDiv.classList.add('content-grid');
  header.textContent = 'Connect with one of our stores';

  // Image
  const imageElement = document.createElement('img');
  imageElement.src = image;
  imageElement.alt =
    'Random street google map location with red pointer to a random location';

  // Store Info
  const contactDetailsDiv = document.createElement('div');
  const storeHeading = document.createElement('h2');
  const address = document.createElement('p');
  contactDetailsDiv.classList.add('contact-details');
  storeHeading.textContent = 'Store Location';
  address.textContent = `123 Random Park \nNeverland, MK 01234 \nOuter Space`;

  // Phone & Fax
  const phoneFaxHeading = document.createElement('h2');
  const phoneNumber = document.createElement('p');
  const fax = document.createElement('p');
  const faxNumber = document.createElement('span');
  phoneFaxHeading.textContent = 'Phone / Fax';
  phoneNumber.textContent = '+1 CHI LLBLISS \n(+1 244 5525477)';
  fax.textContent = 'Fax: ';
  faxNumber.textContent = '+1 222 333 4444';
  fax.appendChild(faxNumber);

  contactDetailsDiv.append(
    storeHeading,
    address,
    phoneFaxHeading,
    phoneNumber,
    fax
  );
  contentDiv.append(imageElement, contactDetailsDiv);
  container.append(header, contentDiv);

  return container;
}
