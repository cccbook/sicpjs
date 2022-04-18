export function math_sin(x) { return Math.sin(x); }
export function math_cos(x) { return Math.cos(x); }
export function positive(x) { return x>0; }
export function negative(x) { return x<0; }
export function average(a,b) { return (a+b)/2; }
export function abs(x) { return Math.abs(x); }
export function close_enough(x, y) { return abs(x - y) < 0.001; }
export function is_null(x) { return x == null; }

export function display(text) {
    console.log(text)
}

export function stringify(x) {
    return x.toString()
}

export function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
