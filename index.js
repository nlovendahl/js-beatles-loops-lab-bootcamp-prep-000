function theBeatlesPlay(musicians, instruments) {
  var pairs = [];
  for (var i = 0; i < musicians.length; i++) {
    pairs.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return pairs;
}

function johnLennonFacts(facts) {
  var x = 0;
  while (x < facts.length) {
    facts[x] = (facts[x] + '!!!');
    x++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  
}
