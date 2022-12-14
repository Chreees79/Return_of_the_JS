const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Array with all the titles of books

function titlesOfBooks(array) {
  return array.map(x => x.title)
};
console.log(titlesOfBooks(books))

//Have all the book been rented at least once ?

console.log('All books rented at least once ?')

function booksRentedAtLeastOnce(array) {
  return array.every(book => book.rented > 0) ? 'Yes' : 'No'  
};
console.log(booksRentedAtLeastOnce(books))

//most rented book

console.log('Most rented book')

function mostRented(array) {
  return array.reduce((book1, book2) => book1.rented > book2.rented? book1 : book2);
};
console.log(mostRented(books))

//Least rented one

console.log('Least rented one')

function leastRented(array) {
  return array.reduce((book1, book2) => book1.rented < book2.rented? book1 : book2);
};
console.log(leastRented(books))

//Delete books with ID 133712

console.log('Delete book with ID 133712 from Array')

function delelteId(array) {
  let book = array.findIndex((x) => x.id === 133712)
  return array.splice(book, 1)
};
console.log(delelteId(books))
console.log(books)