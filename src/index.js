import { default as homePageLoad } from './components/homepage/homepage';
import loadAbout from './components/about/about';
import './assets/css/index.css';

const displayController = (() => {
  homePageLoad(); // initial page load

  const contentDiv = document.querySelector('#content');
  const nav = document.querySelector('nav');

  function clickHandlerNav(ev) {
    ev.preventDefault();
    const selectedLink = ev.target.id;
    contentDiv.textContent = '';

    switch (selectedLink) {
      case 'about':
        contentDiv.append(loadAbout());
        break;
      default:
        contentDiv.append(homePageLoad());
    }
  }

  nav.addEventListener('click', clickHandlerNav);
})();
