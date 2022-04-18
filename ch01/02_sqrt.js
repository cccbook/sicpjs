function abs(x) {
    return x >= 0 ? x : -x;
}

function square(x) {
    return x*x
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

console.log('sqrt(9)=', sqrt(9))
console.log('sqrt(100 + 37)=', sqrt(100 + 37))
console.log('sqrt(sqrt(2) + sqrt(3))=', sqrt(sqrt(2) + sqrt(3)))
console.log('square(sqrt(1000))=', square(sqrt(1000)))
