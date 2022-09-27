const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Array with only the names

console.log("Array with only First names and Last names")
function namesOfPersons(array) {
  return array.map(x => x.first +' ' + x.last);
}
console.log(namesOfPersons(entrepreneurs))

//Array with year replace by age in 2022

console.log('Array with age instead of year of birth')
  var array = []
  var currentYear =  new Date().getFullYear();
  entrepreneurs.forEach(x =>
  array.push({first: x.first, last: x.last, age: (currentYear - x.year)})
  );
console.log(array);

//Array with FirstName and LastName instead of first and last

console.log('Array with complete keys')
var array = []
entrepreneurs.forEach(x =>
  array.push({firstName: x.first, lastName: x.last, year: x.year})
  );
console.log(array);

//Array with people form seventies

console.log('people born in 70s')
function bornIn(array) {
  return array.filter(x => x.year.toString().split('')[2] == 7)
};
console.log(bornIn(entrepreneurs));

//Same but coded otheray

const bornIn70 = array => array.filter(x => x.year.toString().split('')[2] == 7);
console.log(bornIn70(entrepreneurs));