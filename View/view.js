const inquirer = require("inquirer");

class View {
  async startQuiz(value) {
    if (value === "Harry Poter") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Фильмы", "Ты просто космос…"],
        },
      ]);
    } else if (value === "Фильмы") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Harry Poter", "Ты просто космос…"],
        },
      ]);
    } else if (value === "Ты просто космос…") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Harry Poter", "Фильмы"],
        },
      ]);
    } else if (value === "Harry PoterТы просто космос…") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Фильмы"],
        },
      ]);
    } else if (value === "ФильмыHarry Poter") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Ты просто космос…"],
        },
      ]);
    } else if (value === "ФильмыТы просто космос…"){
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Harry Poter"],
        },
      ]);
    } else if (value === "Harry PoterФильмы") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Ты просто космос…"],
        },
      ]);
    } else if (value === "Ты просто космос…Harry Poter") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Фильмы"],
        },
      ]);
    } else if (value === "Ты просто космос…Фильмы") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Harry Poter"],
        },
      ]);
    } else if (value === "") {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Harry Poter", "Фильмы", "Ты просто космос…"],
        },
      ]);
    } else if (value === 'Done') {
      return inquirer.prompt([
        {
          type: "list",
          name: "category",
          message: "Выберите категорию",
          choices: ["Harry Poter", "Фильмы", "Ты просто космос…"],
        },
      ]);
    }
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
      console.log("Вот это верный мэджик!🧪");
      counter += 100;
    } else {
      console.log("Ноооуу!❌");
    }
    return counter;
  }
}
module.exports = View;
