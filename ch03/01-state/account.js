function make_account(balance) {
    function withdraw(amount) {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    function deposit(amount) {
        balance = balance + amount;
        return balance;
    }
    function dispatch(m) {
        return m === "withdraw"
        ? withdraw
        : m === "deposit"
        ? deposit
        : error(m, "unknown request -- make_account");
    }
    return dispatch;
}

const acc = make_account(100);
console.log('acc("withdraw")(50)=', acc("withdraw")(50))
console.log('acc("withdraw")(60)=', acc("withdraw")(60))
console.log('acc("deposit")(40)=', acc("deposit")(40))
console.log('acc("withdraw")(60)=', acc("withdraw")(60))
