const random_init = 717473, rand_max=9233217473
const a = 9713, b=3217

export function rand_update(x) {
    return (a*x+b)%rand_max
}

export function make_rand() {
    let x = random_init;
    return () => {
        x = rand_update(x);
        return x;
    };
}

export const rand = make_rand()