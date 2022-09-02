import {math_sqrt, gcd, rand } from '../../mod.js'

function estimate_pi(trials) {
    return math_sqrt(6 / monte_carlo(trials, dirichlet_test));
}

function dirichlet_test() {
    return gcd(rand(), rand()) === 1;
}

function monte_carlo(trials, experiment) {
    function iter(trials_remaining, trials_passed) {
        return trials_remaining === 0
        ? trials_passed / trials
        : experiment()
        ? iter(trials_remaining - 1, trials_passed + 1)
        : iter(trials_remaining - 1, trials_passed);
    }
    return iter(trials, 0);
}

console.log(estimate_pi(100))

/*
$ deno run montecarlo_pi.js
3.1622776601683795
*/