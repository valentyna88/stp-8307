import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordions = Array.from(
    document.querySelectorAll('.accordion-container')
  );
  const accordion = new Accordion(accordions, {
    duration: 400,
    showFirstItem: false,
    elementClass: 'item',
    triggerClass: 'icon-btn',
    panelClass: 'box-answer',
    headerClass: 'question',
    beforeOpen: currElement => {
      const answerPanel = currElement.querySelector('.box-answer');
      answerPanel.style.display = 'block';
    },
    beforeClose: currElement => {
      const answerPanel = currElement.querySelector('.box-answer');
      answerPanel.style.display = 'none';
    },
  });
});

const sectors = document.querySelectorAll('.item');

sectors.forEach(sector => {
  sector.addEventListener('click', function () {
    const arrow = this.querySelector('.icon');
    arrow.classList.toggle('rotate');
  });
});
