
exports.getDiffWords = function(text){
  var stripped = text.replace(/,/g, '');
  return stripped.split(' ').filter(function(item, index, allItems){
    return index == allItems.indexOf(item);
  });
};
