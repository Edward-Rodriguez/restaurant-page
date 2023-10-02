import { default as initPageLoad } from './components/page-load/page-load';
import loadAbout from './components/about/about';
import './assets/css/index.css';

const displayController = (() => {
  initPageLoad(); // initial page load

  const contentDiv = document.querySelector('#content');
  const nav = document.querySelector('nav');
  const logo = document.querySelector('#logo');
  const aboutLink = document.querySelector('#about');
  const menuLink = document.querySelector('#menu');
  const hoursLink = document.querySelector('#hourslocations');
  const contactLink = document.querySelector('#contact');

  function clickHandlerNav(ev) {
    ev.preventDefault();
    const selectedLink = ev.target.id;
    console.log(selectedLink);
    contentDiv.textContent = '';
    contentDiv.append(loadAbout());
  }

  nav.addEventListener('click', clickHandlerNav);
})();
