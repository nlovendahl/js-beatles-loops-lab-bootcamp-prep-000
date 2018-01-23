function theBeatlesPlay(musician, instrument) {
  var pairs = [];
  for (var i = -1; i <= musician.length; i++) {
    pairs.unshift(`${musician[i]} plays ${instrument[i]}`);
    return pairs;
  }
}