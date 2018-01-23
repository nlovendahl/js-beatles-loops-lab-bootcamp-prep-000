function theBeatlesPlay(musician, instrument) {
  var pairs = [];
  for (var i = 0; i < musician.length; i++) {
    pairs.push(`${musician[i]} plays ${instrument[i]}`);
    return pairs;
  }
}