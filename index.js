// var phrase = 'I love, my dog, dog are, great';
// var stripped = phrase.replace(/,/g, '')
// var unique = stripped.split(' ').filter(function(item, index, allItems){
//   return index == allItems.indexOf(item);
// });

var dt = require('./utilWords.js');

var unique = dt.getDiffWords('I love, my dog, dog are, great');

console.log(unique);
