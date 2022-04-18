function expt(b, n) {
    return n === 0
    ? 1
    : b * expt(b, n - 1);
}

console.log('expt(3,4)=', expt(3,4))
