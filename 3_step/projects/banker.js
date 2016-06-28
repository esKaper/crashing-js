// First goes the Bank Account
function BankAccount(owner) {
    this.owner = owner;
    this.currency = "Euro";
    this.money = 0;

    this.addMoney = function(amount) {
        this.money += amount;
    }

    this.getMoney = function(amount) {
        this.money -= amount;
        return amount;
    }
}


// Then we create A Bank User
function BankUser(name) {
    this.name = name;
    this.account =  new BankAccount(this);

    // Add function that tells how much money the user has
    // HINT: this.account.addMoney(50);
    this.checkMoney = function() {
        console.log("I have " + this.account.money + " " + this.account.currency + ". I'm a rich man ;) ");
    }

    // Add function that puts money on the account
    this.putsMoney = function(someMoney) {
        this.account.addMoney(someMoney);
    }

    this.redrawMoney = function(amount) {
        this.account.getMoney(amount);
    }

    // TODO: Add function that allows user to send money to another user
    this.sendMoney = function(amount, otherAccount) {
        this.redrawMoney(amount);
        otherAccount.putsMoney(amount);
    }
}

var kristian = new BankUser('Kristian');
var katie = new BankUser('Katie');

katie.putsMoney(100);
kristian.redrawMoney(30);
katie.sendMoney(70, kristian);
console.log("Katie:");
katie.checkMoney();
console.log("Kristian:");
kristian.checkMoney();
