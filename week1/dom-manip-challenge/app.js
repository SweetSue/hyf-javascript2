'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'ravel',
    'quatrevingtdixneuf_francs',
    'ockupanterna',
    'girl_with_a_pearl_earring',
    'the_pillars_of_the_earth',
    'le_bebe',
    'vernon_subutex',
    'oneqheightyfour',
    'millenium',
    'le_black_note',
  ];
  // console.log(bookTitles);

  // Replace with your own code
  const bookDetails = {
    ravel: {
      title: 'Ravel',
      language: 'French',
      author: 'Jean Echenoz',
      publisher: 'les \u00e9ditions de minuit',
      year: '2006',
      price: '12 $',
    },
    quatrevingtdixneuf_francs: {
      title: '99 francs',
      language: 'French',
      author: 'Fr\u00e9d\u00e9ric Beigbeder',
      publisher: 'Grasset',
      year: '2000',
      price: '9 $',
    },
    ockupanterna: {
      title: 'Ockupanterna',
      language: 'Swedish',
      author: ' Thomas Kanger',
      publisher: 'norstedts',
      year: '2005',
      price: '12 $',
    },
    girl_with_a_pearl_earring: {
      title: 'Girl with a Pearl Earring',
      language: 'English',
      author: 'Tracy Chevalier',
      publisher: 'Harper Collins',
      year: '1999',
      price: '15 $',
    },
    the_pillars_of_the_earth: {
      title: 'the Pillars of the Earth',
      language: 'English',
      author: 'Ken Follett',
      publisher: 'Mc Millan',
      year: '1989',
      price: '11 $',
    },
    le_bebe: {
      id: 'le_bebe',
      title: 'le b\u00e9b\u00e9',
      language: 'French',
      author: 'Marie Darrieussecq',
      publisher: 'POL',
      year: '2002',
      price: '8 $',
    },
    vernon_subutex: {
      id: 'vernon_subutex',
      title: 'Vernon Subutex',
      language: 'French',
      author: 'Virginie Despentes',
      publisher: 'Grasset',
      year: '2015',
      price: '12 $',
    },
    oneqheightyfour: {
      id: '1q84',
      title: '1Q84',
      language: 'english',
      author: 'Haruki Murakami ',
      publisher: 'Random House UK',
      year: '2011',
      price: '15 $',
    },
    millenium: {
      id: 'millenium',
      title: 'Millenium',
      language: 'Swedish',
      author: 'Stieg Larsson ',
      publisher: 'norstedts',
      year: '2014',
      price: '16 $',
    },
    le_black_note: {
      id: 'le_black_note',
      title: 'le Black Note',
      language: 'French',
      author: 'Tanguy Viel',
      publisher: 'Les \u00e9ditions de minuit',
      year: '1998',
      price: '9 $',
    },
  };
  console.log(bookDetails);

  const bookCover = {
    ravel: 'images/ravel.jpg',
    quatrevingtdixneuf_francs: 'images/99francs.jpg',
    ockupanterna: 'images/ockupanterna.jpg',
    girl_with_a_pearl_earring: 'images/girl_with_a_pearl_earring.jpg',
    the_pillars_of_the_earth: 'images/the_pillars_of_the_earth.jpg',
    le_bebe: 'images/le_bebe.jpg',
    vernon_subutex: 'images/vernon_subutex.jpg',
    oneqheightyfour: 'images/1q84.jpg',
    millenium: 'images/millenium.jpg',
    le_black_note: 'images/le_black_note.jpg',
  };

  function generateUl() {
    let newUl = document.createElement('ul');
    for (let i = 0; i < bookTitles.length; i++) {
      let newLi = document.createElement('li');
      newLi.innerHTML = bookTitles[i];
      newUl.appendChild(newLi);
    }
    return newUl;
  }
  generateUl();

  function displayBookDetails() {
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    for (let key in bookDetails) {
      document.body.appendChild(container);
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'book');

      let bookTitle = document.createElement('ul');

      let Header = document.createElement('h2');
      bookTitle.appendChild(Header);
      newDiv.appendChild(bookTitle);
      container.appendChild(newDiv);

      Header.innerHTML = bookDetails[key].title;
      let bookPicture = document.createElement('img');
      bookPicture.setAttribute('src', bookCover[key]);
      newDiv.appendChild(bookPicture);
      bookPicture.setAttribute('class', 'bookImage');
      let bookAuthor = document.createElement('li');
      bookTitle.appendChild(bookAuthor);
      bookAuthor.innerHTML =
        '<span class="info">' + 'Author:  ' + '</span>' + bookDetails[key].author;

      let bookLanguage = document.createElement('li');
      bookTitle.appendChild(bookLanguage);
      bookLanguage.innerHTML =
        '<span class="info">' + 'Language:  ' + '</span>' + bookDetails[key].language;

      let bookPublisher = document.createElement('li');
      bookTitle.appendChild(bookPublisher);
      bookPublisher.innerHTML =
        '<span class="info">' + 'Publisher:  ' + '</span>' + bookDetails[key].publisher;

      let bookYear = document.createElement('li');
      bookTitle.appendChild(bookYear);
      bookYear.innerHTML = '<span class="info">' + 'Year:  ' + '</span>' + bookDetails[key].year;

      let bookPrice = document.createElement('li');
      bookTitle.appendChild(bookPrice);
      bookPrice.innerHTML = '<span class="info">' + 'Price:  ' + '</span>' + bookDetails[key].price;

      let buyBook = document.createElement('li');
      bookTitle.appendChild(buyBook);
      buyBook.setAttribute('class', 'buy');
      buyBook.innerHTML = '<span class="cart">' + 'Add to cart' + '</span>';
    }
  }
  function main() {
    let h1 = document.createElement('h1');
    h1.innerText = 'Books of the Week';
    document.body.appendChild(h1);
    displayBookDetails();
  }

  window.addEventListener('load', main);
}
