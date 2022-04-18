import {pair, head, tail} from '../pair.js'
import {display, stringify} from '../lib.js'

export function make_rat(n, d) { return pair(n, d); }
export function numer(x) { return head(x); }
export function denom(x) { return tail(x); }
export function print_rat(x) {
    return display(stringify(numer(x)) + " / " + stringify(denom(x)));
}

export function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
    denom(x) * denom(y));
}

export function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
    denom(x) * denom(y));
}

export function mul_rat(x, y) {
    return make_rat(numer(x) * numer(y),
    denom(x) * denom(y));
}

export function div_rat(x, y) {
    return make_rat(numer(x) * denom(y),
    denom(x) * numer(y));
}

export function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x);
}
    
