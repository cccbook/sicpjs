import { list, list_print, filter, accumulate, is_odd, plus, times, pair } from "../mod.js"

var list5 = list(1,2,3,4,5)
var odd5 = filter(is_odd, list5)
list_print(odd5)
var sum5 = accumulate(plus, 0, list5)
console.log('sum5=', sum5)
var times5 = accumulate(times, 1, list5)
console.log('times5=', times5)
var copy5 = accumulate(pair, null, list(1, 2, 3, 4, 5));
console.log('copy5=')
list_print(copy5)
