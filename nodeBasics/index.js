import chalk from "chalk";

console.log(chalk.blue('This text should be written in blue color'));
console.log(chalk.greenBright('Green text') + chalk.yellow('yellow words') + chalk.red('!'));
console.log(chalk.bgCyan('Combining', chalk.bold.underline.magenta('styles and colors') + '!'));