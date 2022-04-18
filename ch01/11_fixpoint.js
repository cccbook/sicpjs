import {abs, average, negative, positive, math_sin, math_cos, close_enough } from './lib.js'

const tolerance = 0.00001;
function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next)
        ? next
        : try_with(next);
    }
    return try_with(first_guess);
}

console.log('fixed_point(math_cos, 1)=', fixed_point(math_cos, 1))
console.log('fixed_point(y => math_sin(y) + math_cos(y), 1)=', fixed_point(y => math_sin(y) + math_cos(y), 1))

/* 不會收斂
function sqrt(x) {
    return fixed_point(y => x / y, 1);
}
*/

function sqrt(x) {
    return fixed_point(y => average(y, x / y), 1);
}

console.log('sqrt(2)=', sqrt(2))
