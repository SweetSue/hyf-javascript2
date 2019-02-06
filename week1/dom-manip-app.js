'use strict';

// 1. ********************************************** */
{
  const bookTitles = [
    // Replace with your own book titles
    'ravel',
    '99_francs',
    'ockupanterna',
    'burning_bright',
    'the_echo',
    'le_bebe',
    'vernon_subutex',
    '1q84',
    'millenium',
    'le_black_note',
  ];

  // Replace with your own code
  // console.log(bookTitles);
}

// 2. ********************************************** */
// Done in html file

// 3. ********************************************** */
function arrayToList(arr) {
  let ul = document.createElement('ul'),
    li;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      li.appendChild(arrayToList(arr[i]));
    } else {
      li = document.createElement('li');
      li.appendChild(document.createTextNode(arr[i]));
      ul.appendChild(li);
    }
  }
  return ul;
}

const bookTitles = [
  // Replace with your own book titles
  'ravel',
  '99_francs',
  'ockupanterna',
  'burning_bright',
  'the_echo',
  'le_bebe',
  'vernon_subutex',
  '1q94',
  'millenium',
  'le_black_note',
];

document.body.appendChild(arrayToList(bookTitles));

// 4. ********************************************** */

const someBooks = {
  book1: {
    id: 'ravel',
    title: 'Ravel',
    language: 'fran\u00e7ais',
    author: 'Jean Echenoz',
  },
  book2: {
    id: '99_francs',
    title: '99 francs',
    language: 'fran\u00e7ais',
    author: 'Fr\u00e9d\u00e9ric Beigbeder',
  },
  book3: {
    id: 'ockupanterna',
    title: 'Ockupanterna',
    language: 'svenska',
    author: ' Thomas Kanger',
  },
  book4: {
    id: 'burning_bright',
    title: 'Burning Bright',
    language: 'english',
    author: 'Tracy Chevalier',
  },
  book5: {
    id: 'the_echo',
    title: 'the Echo',
    language: 'english',
    author: 'Minette Walters',
  },
  book6: {
    id: 'le_bebe',
    title: 'le b\u00e9b\u00e9',
    language: 'fran\u00e7ais',
    author: 'Marie Darrieussecq',
  },
  book7: {
    id: 'vernon_subutex',
    title: 'Vernon Subutex',
    language: 'fran\u00e7ais',
    author: 'Virginie Despentes',
  },
  book8: {
    id: '1q84',
    title: '1Q84',
    language: 'english',
    author: 'Haruki Murakami ',
  },
  book9: {
    id: 'millenium',
    title: 'Millenium',
    language: 'svenska',
    author: 'Stieg Larsson ',
  },
  book10: {
    id: 'le_black_note',
    title: 'le Black Note',
    language: 'fran\u00e7ais',
    author: 'Tanguy Viel',
  },
};
console.log(someBooks);
