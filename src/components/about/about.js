import Image from './store-front.jpg';
import './about.css';

export default function loadAbout() {
  const container = document.createElement('div');
  container.classList.add('container');

  const aboutUsDiv = document.createElement('div');
  aboutUsDiv.classList.add('msg-container');
  const header = document.createElement('h1');
  header.textContent = 'About Us';
  const aboutUsMessage = document.createElement('p');
  aboutUsMessage.textContent = message;
  aboutUsDiv.append(header, aboutUsMessage);

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('img-container');
  const image = document.createElement('img');
  image.setAttribute('id', 'about-img');
  image.src = Image;

  const attributionDiv = document.createElement('div');
  const artistLink = document.createElement('a');
  artistLink.href =
    'https://unsplash.com/@brianna_santellan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  artistLink.textContent = 'Brianna Tucker';
  const siteLink = document.createElement('a');
  siteLink.href =
    'https://unsplash.com/photos/zPWnbj_xXE8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  siteLink.textContent = 'Unsplash';

  attributionDiv.append('Photo by ', artistLink, ' on ', siteLink);
  imageDiv.append(image, attributionDiv);
  container.append(aboutUsDiv, imageDiv);
  return container;
}

const message = `Welcome to Chill Bliss Ice Cream Shop! We are a family-owned and operated ice cream parlor dedicated to serving up smiles and sweet treats to our community.\n 

At Chill Bliss, we believe that ice cream is more than just a dessert; it’s a moment of pure joy and indulgence. Our mission is to create an unforgettable experience for every customer that walks through our doors. Whether you're a child, a teenager, or a young-at-heart adult, we aim to transport you to a world of pure bliss with every lick of our creamy, delectable ice cream.\n

We are proud to be a part of the local community and are committed to giving back. Through partnerships with local charities and organizations, we strive to make a positive impact and support causes that matter to us and our customers.\n

So, whether you're looking for a sweet treat to cool off on a hot summer day, a place to celebrate a special occasion, or simply a moment of pure indulgence, Chill Bliss Ice Cream Shop is the perfect destination. Come join us and experience the bliss of our handcrafted ice cream – one scoop at a time.`;
