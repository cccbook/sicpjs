function pair(x, y) {
    return m => m(x, y);
}

function head(z) {
    return z((p, q) => p);
}

function tail(z) {
    return z((p, q) => q);
}

/*
pair(x,y) = m=>m(x,y)

head = (p,q)=>p

head(pair(1,2)) = head(m=>m(1,2)) = 
*/
