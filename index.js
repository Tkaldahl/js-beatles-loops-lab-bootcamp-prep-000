function theBeatlesPlay(musicians, instruments){
  const beatles = []
  for (var i=0; i<4; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts){
  let beatlesFacts = []
  let i=0
  while(facts[i]){
    beatlesFacts.push(`${facts[i]}!!!`)
    i++
  }
  return beatlesFacts
}

function iLoveTheBeatles(n){
  let beatlesArray = []
  do {
    console.log('I love the Beatles!')
  }
  while (n>0){
    --n
  }
  return beatlesArray
}



