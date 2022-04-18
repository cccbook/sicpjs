import { make_rat, print_rat, add_rat, mul_rat } from './ratio.js'

const one_half = make_rat(1, 2);
print_rat(one_half);
const one_third = make_rat(1, 3);
print_rat(add_rat(one_half, one_third));
print_rat(mul_rat(one_half, one_third));
print_rat(add_rat(one_third, one_third));
