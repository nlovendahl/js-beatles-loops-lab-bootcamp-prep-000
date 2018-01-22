function theBeatlesPlay(musician, instrument) {
  var pairs = [];
  for (var i = 0; i <= musician.length; i++) {
    var musicianString = `${musician[i]} plays ${instrument[i]}`
    pairs.push(musicianString);
  }
  return pairs;
}