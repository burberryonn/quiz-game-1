const inquirer = require("inquirer");

class View {
  async startQuiz() {
    return inquirer.prompt([
      {
        type: "list",
        name: "category",
        message: "Выберите категорию",
        choices: ["Еда", "Эльбрус", "Смешное"],
      },
    ]);
  }
  async pullQuestions({ question, answer, choices }, counter) {
    let userAnswer;
    if (choices.length > 1) {
      userAnswer = await inquirer.prompt([
        {
          type: "list",
          name: "userAnswer",
          message: question,
          choices,
        },
      ]);
    } else {
      userAnswer = await inquirer.prompt([
        {
          type: "input",
          name: "userAnswer",
          message: question,
        },
      ]);
    }
    if (userAnswer.userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
      console.log("Умничко!! :purple_heart:");
      counter += 100;
    } else {
      console.log("Не совсем так :sob:");
    }
    return counter;
  }
}
module.exports = View;