

## expression

```
$ deno 
Deno 1.20.6
exit using ctrl+d or close()
> 486
486
> 137+349
486
> 1000-334
666
> 5*99
495
> 10/4
2.5
> 2.7+10
12.7
> 3 * 5 + 10 / 2
20
> (3 * 5) + (10 / 2)
20
> 1 - 5 / 2 * 4 + 3
-6
> (1 - ((5 / 2) * 4)) + 3
-6
> 3 * 2 * (3 - 5 + 4) + 27 / 6 * 10        
57
> 3 * 2 * (3 - 5 + 4)
```

## variable

```
> const size=2
undefined
> size
2
> 5*size
10
> const pi = 3.14159
undefined
> const radius = 10
undefined
> const circumference = 2 * pi * radius    
undefined
> circumference
62.8318
```

## function

```
> function square(x) {
return x * x;
}
undefined
> square(21)
441
> square(2+5)
49
> square(square(3))
81

> function sum_of_squares(x, y) {
return square(x) + square(y);
}
undefined
> sum_of_squares(3, 4)
25
> function f(a) {
return sum_of_squares(a + 1, a * 2);       
}
undefined
> f(5)
136
> sum_of_squares(5 + 1, 5 * 2)
136
> function abs(x) {
return x >= 0 ? x : - x;
}
```