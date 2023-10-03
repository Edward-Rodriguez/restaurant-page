import Image from './github-mark.svg';
import './footer.css';

export default function loadFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');

  // background photo attribution
  const imageAttribution = document.createElement('p');
  const artistLink = document.createElement('a');
  const artistName = 'Courtney Cook';
  const siteLink = document.createElement('a');
  const siteName = 'Unsplash';

  artistLink.href =
    'https://unsplash.com/@courtneymcook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  artistLink.textContent = artistName;
  siteLink.href =
    'https://unsplash.com/photos/66IZaW9LIpI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  siteLink.textContent = siteName;
  imageAttribution.append('Photo by ', artistLink, ' on ', siteLink);

  // icon & logo attribution
  const logoAttribution = document.createElement('p');
  const sourceLink = document.createElement('a');
  const sourceName = 'SVG Repo';

  sourceLink.href = 'https://www.svgrepo.com';
  sourceLink.textContent = sourceName;
  logoAttribution.append('Vectors and icons by ', sourceLink);

  // author copyright
  const copyrightDiv = document.createElement('div');
  const copyrightP = document.createElement('p');
  const copyrightImage = document.createElement('img');
  const copyrightLink = document.createElement('a');

  copyrightDiv.classList.add('copyright');
  copyrightP.textContent = 'Copyright \u{A9} 2023 Edward-Rodriguez';
  copyrightImage.src = Image;
  copyrightImage.alt = 'Github logo';
  copyrightLink.href = 'https://github.com/Edward-Rodriguez';
  copyrightLink.appendChild(copyrightImage);
  copyrightDiv.append(copyrightP, copyrightLink);

  const separator = '\u{2223}'; //divides|pipe symbol
  footer.append(
    imageAttribution,
    separator,
    logoAttribution,
    separator,
    copyrightDiv
  );

  return footer;
}
