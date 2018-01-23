function theBeatlesPlay(musician, instrument) {
  var pairs = [];
  for (var i = -1; i <= musician.length; i++) {
    pairs.push(`${musician[i]} plays ${instrument[i]}`);
    return pairs;
  }
}