import { is_null } from './lib.js'
import { pair, head, tail } from './pair.js'

export function list(...args) {
    return (args.length == 0)
    ?null
    :pair(args[0], list(...args.slice(1)))
}

export function list_str(items) {
    return is_null(items)
    ?null
    :'['+head(items)+','+list_str(tail(items))+']'
}

export function list_print(items) {
    console.log(list_str(items))
}

export function list_ref(items, n) {
    return n === 0
    ? head(items)
    : list_ref(tail(items), n - 1);
}

export function length(items) {
    return is_null(items)
    ? 0
    : 1 + length(tail(items));
}

export function append(list1, list2) {
    return is_null(list1)
    ? list2
    : pair(head(list1), append(tail(list1), list2));
}

export function map(fun, items) {
    return is_null(items)
    ? null
    : pair(fun(head(items)), map(fun, tail(items)));
}

export function foreach(fun, items) {
    return is_null(items)
    ? fun(null)
    : pair(fun(head(items)), foreach(fun, tail(items)));
}
