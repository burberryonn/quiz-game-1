class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async runQuiz() {
    let counter = 0;
    const userCategory = await this.view.startQuiz();

    console.log(`Вы выбрали категорию "${userCategory.category}"`);
    let arrOfObjs;
    console.log(userCategory.category, "CATEGORY");

    if (userCategory.category === "Смешное") {
      arrOfObjs = await this.model.getQuestionsAndAnswers("funny.txt");
    }
    if (userCategory.category === "Еда") {
      arrOfObjs = await this.model.getQuestionsAndAnswers("eat.txt");
    }
    if (userCategory.category === "Эльбрус") {
      arrOfObjs = await this.model.getQuestionsAndAnswers("ElbrusFriends.txt");
    }
    for (const question of arrOfObjs) {
      counter = await this.view.pullQuestions(question, counter);
    }
    console.log(
      `Поздравляем, ты выиграл ${counter} очков в категории: ${userCategory.category}`
    );
  }
}

module.exports = Controller;
