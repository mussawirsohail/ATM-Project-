import inquirer from "inquirer";
const mypin = 8585;
let mybalance = 35000;
const answer = await inquirer.prompt([
    {
        name: "MyPIN",
        type: "number",
        message: "Enter your Pin code"
    }
]);
if (mypin == answer.MyPIN) {
    console.log("Correct Pin!");
}
else {
    console.log("Your Pin is incorrect");
}
console.log(answer);
const Cash_answer = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select the option",
        choices: ["Cash_Withdraw", "Deposit", "Check_Balance"]
    }
]);
console.log(Cash_answer);
if (Cash_answer.operation === "Cash_Withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    mybalance -= amountAns.amount;
    console.log("your current balance is: " + mybalance);
}
if (Cash_answer.Available_balance === "Deposit") {
    let moneydeposit = await inquirer.prompt([
        {
            name: "Deposited_Money",
            type: "number",
            message: "Money you want to deposit"
        }
    ]);
    mybalance += moneydeposit.Deposited_Money;
    console.log("Money deposited Successfully");
    console.log("Your available balance is " + mybalance);
}
