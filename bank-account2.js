const bankAccounts = []

function createAccount(username, balance) {
    account = {
        username: username.toLowerCase(),
        balance: balance
    }
    bankAccounts.push(account)
}

function getAccount(username) {
    //Loops through the bankAccounts array and check for an account that matches the specified username
    for (account of bankAccounts) {
        if (account.username == username.toLowerCase()){
            return account
        }
    }
    console.log("Account Not Found")
    return null
}

function withdraw(username, amount){
    for (i=0; i<bankAccounts.length; i++){
        account = bankAccounts[i]
        if (account.username == username.toLowerCase()){
            if (account.balance >= amount) {
                account.balance -= amount
                bankAccounts[i] = account
                return account
            }
            console.log("Insufficient Funds")
            return account
        }
    }
    console.log("Account Not Found")
    return null
}

function deposit(username, amount){
    for (i=0; i<bankAccounts.length; i++){
        account = bankAccounts[i]
        if (account.username == username.toLowerCase()){
            account.balance += amount
            bankAccounts[i] = account
            return account
        }
    }
    console.log("Account Not Found")
    return null
}

function getBalance(username) {
    for (account of bankAccounts) {
        if (account.username == username.toLowerCase()){
            return account.balance
        }
    }
    console.log("Account Not Found")
    return null
}

function getBankBalance() {
    total = 0
    for (account of bankAccounts) {
        total += account.balance
    }
    return total
}

createAccount("Nife", 2000)
createAccount("Bolanle", 5000)
createAccount("Bidemi", 0)
console.log(withdraw("Matthew", 3000))
console.log(withdraw("Nife", 2000.50))
console.log(deposit("Nife", 2000))
console.log(getAccount("Nife"))
console.log(getBalance("NIFE"))
console.log(getBankBalance())