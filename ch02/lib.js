export function display(text) {
    console.log(text)
}

export function stringify(x) {
    return x.toString()
}

export function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
