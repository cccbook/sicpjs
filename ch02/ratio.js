import {pair, head, tail} from './pair.js'

function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
    denom(x) * denom(y));
}

function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
    denom(x) * denom(y));
}

function mul_rat(x, y) {
    return make_rat(numer(x) * numer(y),
    denom(x) * denom(y));
}

function div_rat(x, y) {
    return make_rat(numer(x) * denom(y),
    denom(x) * numer(y));
}

function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x);
}
    
const x = pair(1, 2);
console.log('head(x)=', head(x))
console.log('tail(x)=', tail(x))
    