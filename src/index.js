import loadHomePage from './components/homepage/homepage';
import loadFooter from './components/footer/footer';
import loadNav from './components/nav/nav';
import loadAbout from './components/about/about';
import loadMenu from './components/menu/menu';
import loadContact from './components/contact/contact';
import './assets/css/index.css';

const displayController = (() => {
  const contentDiv = document.querySelector('#content');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');

  //inital page load
  nav.append(loadNav());
  contentDiv.append(loadHomePage());
  footer.append(loadFooter());

  function clickHandlerNav(ev) {
    ev.preventDefault();
    const selectedLink = ev.target.id;

    if (!['', 'heading'].includes(selectedLink)) {
      contentDiv.textContent = '';
      switch (selectedLink) {
        case 'about':
          contentDiv.append(loadAbout());
          break;
        case 'logo':
          contentDiv.append(loadHomePage());
          break;
        case 'menu':
          contentDiv.appendChild(loadMenu());
          break;
        case 'contact':
          contentDiv.appendChild(loadContact());
        default:
          return;
      }
    }
  }

  nav.addEventListener('click', clickHandlerNav);
})();
