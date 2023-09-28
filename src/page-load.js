export default function pageLoad() {
  const contentDiv = document.querySelector('#content');

  // navigation bar
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navItems = ['About', 'Treats', 'Hours & Locations', 'Contact'];
  navItems.forEach((navItem) => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = navItem;
    anchor.href = `/${replaceWhitespace(navItem)}`;
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
  });
  nav.appendChild(navList);

  // header
  const header = document.createElement('header');
  const heading = document.createElement('h1');
  const name = 'Chill Bliss Ice Cream Shop';
  const headline = document.createElement('p');
  heading.textContent = name;
  headline.textContent = `Indulge in Scoopfuls of Frozen Delight at ${name}`;
  header.append(heading, headline);

  contentDiv.append(nav, header);
}

function replaceWhitespace(string) {
  const regex = /\s+/;
  return string.replace(regex, '%');
}
