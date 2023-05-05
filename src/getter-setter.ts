class Account {
  private _balance: number = 100;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    this._balance += amount;
  }
}

const anAccount = new Account();
anAccount.balance = 50;
console.log(anAccount.balance);
