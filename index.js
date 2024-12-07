#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
var answer = await inquirer.prompt([{
     name : "goodname",// uska name lena chahrhi hon
     type : "string",// uski datatype string
     message: "Enter your Good name"//message jo apko user ko dekhana ho
}
])

// console.log(answer.name);// answer arha hai undefined
console.log(chalk.yellow(answer.goodname));

