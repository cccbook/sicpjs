import {pair, head, tail} from '../pair.js'

const x = pair(1, 2);
console.log('head(x)=', head(x))
console.log('tail(x)=', tail(x))
    
const y = pair(3, 4);
const z = pair(x, y);

console.log('head(head(z))=', head(head(z)))
console.log('head(tail(z))=', head(tail(z)))
