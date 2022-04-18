import {abs, average, negative, positive, math_sin, close_enough } from './lib.js'

function search(f, neg_point, pos_point) {
    const midpoint = average(neg_point, pos_point);
    if (close_enough(neg_point, pos_point)) {
        return midpoint;
    } else {
        const test_value = f(midpoint);
        return positive(test_value) ? search(f, neg_point, midpoint)
             : negative(test_value) ? search(f, midpoint, pos_point)
             : midpoint;
    }
}


console.log('search(math_sin, 2, 4)=', search(math_sin, 2, 4))
// console.log('half_interval_method(math_sin, 2, 4)=', half_interval_method(math_sin, 2, 4))