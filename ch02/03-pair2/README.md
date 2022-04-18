# pair2

```
$ deno run pair2_test.js
head(x)= 1
tail(x)= 2      
head(head(z))= 1
head(tail(z))= 3
```

這是如何運作的呢？


```js
function pair(x, y) {
    return m => m(x, y);
}

function head(z) {
    return z((p, q) => p);
}

function tail(z) {
    return z((p, q) => q);
}


const x = pair(1, 2);
console.log('head(x)=', head(x)) // 會印出 1 ....

// 看來很合理，腦袋怎麼想都是打結的 ...
// head(x) = head(pair(1,2)) = head(m=>m(1,2)) = ... 打結了 ...

```
