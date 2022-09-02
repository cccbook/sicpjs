import { pair, head, tail, is_pair } from './pair.js'
import { is_null } from './lib.js'

export function count_leaves(x) {
    return is_null(x)
    ? 0
    : ! is_pair(x)
    ? 1
    : count_leaves(head(x)) + count_leaves(tail(x));
}

function enumerate_tree(tree) {
    return is_null(tree)
    ? null
    : ! is_pair(tree)
    ? list(tree)
    : append(enumerate_tree(head(tree)),
    enumerate_tree(tail(tree)));
}

export function flatmap(f, seq) {
    return accumulate(append, null, map(f, seq));
}
