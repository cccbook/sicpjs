import {display} from '../../mod.js'
import {rand} from '../rand.js'

function rands(n) {
    display(rand())
    return (n == 0) ? null : rands(n-1)
}

rands(10)

/*

$ deno run rand_test.js
6968818466
8649686385
1358073895
5937193908
6521312736
1638743205
8279047403
2296456199
7258866809
524695206
8861711472
*/