function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length ; i++) { 
    arr.push(musicians[i] + " plays " + instruments[i]);
}
return arr;
}

function johnLennonFacts(facts){
  var arr = [];
  var i=0;
  while (i<facts.length){
    arr.push(facts[i] + "!!!"); i++;
  }
  return arr;
}