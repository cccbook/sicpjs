function inc(n) { return n+1 }
function dec(n) { return n-1 }

/*
function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
}
*/
// /*
function plus(a, b) {
    return a === 0 ? b : plus(dec(a), inc(b));
}
// */
console.log('plus(3,2)=', plus(3,2))
