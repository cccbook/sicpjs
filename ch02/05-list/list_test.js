import { display, head, list, list_ref, list_print, map, foreach } from "../mod.js"

const one_through_four = list(1, 2, 3, 4);
console.log('head(one_through_four)=', head(one_through_four))
console.log('list_ref(one_through_four,2)=', list_ref(one_through_four, 2))
list_print(one_through_four)
var ten = map((x)=>x*10, one_through_four)
list_print(ten)
foreach((x)=>display(x), one_through_four)

