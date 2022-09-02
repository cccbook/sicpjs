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

## 解說

既然函數也是第一等公民，當然可以用函數來結合 head+tail

但這裡有個前提，是必須支援 Closure (閉包)

這樣就能把參數與環境複製並包進來，於是這些參數就形成了《資料結構》，像是 (head,tail)


