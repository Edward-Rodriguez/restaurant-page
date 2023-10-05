import loadHomePage from './components/homepage/homepage';
import loadFooter from './components/footer/footer';
import loadNav from './components/nav/nav';
import loadAbout from './components/about/about';
import './assets/css/index.css';

const displayController = (() => {
  const contentDiv = document.querySelector('#content');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');

  //inital page load
  nav.append(loadNav());
  contentDiv.append(loadHomePage()); // initial page load
  footer.append(loadFooter());

  function clickHandlerNav(ev) {
    ev.preventDefault();
    const selectedLink = ev.target.id;
    contentDiv.textContent = '';

    switch (selectedLink) {
      case 'about':
        contentDiv.append(loadAbout());
        break;
      default:
        contentDiv.append(loadHomePage());
    }
  }

  nav.addEventListener('click', clickHandlerNav);
})();
