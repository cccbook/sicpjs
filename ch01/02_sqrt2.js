function abs(x) {
    return x >= 0 ? x : -x;
}

function square(x) {
    return x*x
}

function average(x, y) {
    return (x + y) / 2;
}

function sqrt(x) {
    function is_good_enough(guess) {
    return abs(square(guess) - x) < 0.001;
    }
    function improve(guess) {
    return average(guess, x / guess);
    }
    function sqrt_iter(guess) {
    return is_good_enough(guess)
    ? guess
    : sqrt_iter(improve(guess));
    }
    return sqrt_iter(1);
}

console.log('sqrt(9)=', sqrt(9))
console.log('sqrt(100 + 37)=', sqrt(100 + 37))
console.log('sqrt(sqrt(2) + sqrt(3))=', sqrt(sqrt(2) + sqrt(3)))
console.log('square(sqrt(1000))=', square(sqrt(1000)))
