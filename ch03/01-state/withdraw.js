function make_withdraw(balance) {
    return amount => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
}

const W1 = make_withdraw(100);
const W2 = make_withdraw(100);

console.log('W1(50)=', W1(50))
console.log('W2(70)=', W2(70))
console.log('W2(40)=', W2(40))
console.log('W1(40)=', W1(40))
