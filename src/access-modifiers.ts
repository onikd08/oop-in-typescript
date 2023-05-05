class BankAccount {
  readonly id: number;
  private _balance: number; // not accessible outside class
  protected name: string; // only accessible in the same class and the child classes

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  getBalance(): number {
    return this._balance;
  }

  deposit(amount: number): number {
    this._balance += amount;
    return this._balance;
  }

  withdraw(amount: number): number {
    this._balance -= amount;
    return this._balance;
  }
}

class StudentAccount extends BankAccount {
  getName(): string {
    return this.name;
  }
}

const account = new BankAccount(101, "John", 50);
const stdAcc = new StudentAccount(102, "Doe", 10);
console.log(stdAcc.getName());

account.deposit(50);
account.withdraw(100);
console.log(account.getBalance());
