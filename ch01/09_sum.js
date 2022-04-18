function sum(term, a, next, b) {
    return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b);
}

function inc(n) {
    return n + 1;
}

function cube(x) {
    return x*x*x
}

function sum_cubes(a, b) {
    return sum(cube, a, inc, b);
}

function identity(x) {
    return x;
}

function sum_integers(a, b) {
    return sum(identity, a, inc, b);
}

function pi_sum(a, b) {
    function pi_term(x) {
        return 1 / (x * (x + 2));
    }
    function pi_next(x) {
        return x + 4;
    }
    return sum(pi_term, a, pi_next, b);
}


console.log('sum_integers(1, 10)=', sum_integers(1,10))
console.log('sum_cubes(1, 10)=', sum_cubes(1, 10))
console.log('8 * pi_sum(1, 1000)=', 8 * pi_sum(1, 1000))