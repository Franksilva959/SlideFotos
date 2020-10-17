'use strict';

const images = [
  {
    id: '1',
    url: './img/batalha.jpg',
  },
  {
    id: '2',
    url: './img/gohan.jpg',
  },
  {
    id: '3',
    url: './img/gokubill.jpg',
  },
  {
    id: '4',
    url: './img/homemferro.jpg',
  },

  {
    id: '5',
    url: './img/sayajins.jpg',
  },
  {
    id: '6',
    url: './img/vegeta.jpg',
  },

  {
    id: '7',
    url: './img/aranha.jpg',
  },
  {
    id: '8',
    url: './img/aranha2.jpg',
  },
  {
    id: '9',
    url: './img/car.jpg',
  },
  {
    id: '10',
    url: './img/shelby.jpg',
  },
  {
    id: '11',
    url: './img/civic.jpg',
  },
  {
    id: '12',
    url: './img/frank.jpg',
  },
];

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
};

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
};

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
