
export function WordsFrom(text){
  var stripped = text.replace(/,/g, '');
  return stripped.split(' ').filter(function(item, index, allItems){
    return index == allItems.indexOf(item);
  });
};

export function getDiffWords(newArray, knownArray){
    var a = [], diff = [];

    for (var i = 0; i < newArray.length; i++) {
        a[newArray[i]] = true;
    }

    for (var i = 0; i < knownArray.length; i++) {
        if (a[knownArray[i]]) {
            delete a[knownArray[i]];
        } else {
            a[knownArray[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}
