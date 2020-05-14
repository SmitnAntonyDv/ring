//create a constant lower
const toTitleCase = require('to-title-case')

//console.log(toTitleCase);

// the markdown content i want to pass 
const lower = 'the lord of the rings: the return of the king'

// the important package "toTittleCase" returns the markdown "lower".
const title = toTitleCase(lower);

console.log(title);