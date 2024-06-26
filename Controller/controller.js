const play = require('play-sound')();

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async runQuiz(value) {
    let counter = 0;
    const userCategory = await this.view.startQuiz(value);
    if (userCategory === undefined) {
      return (value = "Done");
    }
    value += userCategory.category;
    console.log(`Вы выбрали категорию "${userCategory.category}"`);
    let arrOfObjs;

    if (userCategory.category === "👽 Ты просто космос… 👽") {
            play.play('./music/nlo_true.mp3',{timeout: 6000})
      arrOfObjs = await this.model.getQuestionsAndAnswers("NLO.txt");
    }
    if (userCategory.category === "🧙🏾 Harry Poter 🧙🏾") {
            play.play('./music/Hedwig.mp3',{timeout: 60_000})
      arrOfObjs = await this.model.getQuestionsAndAnswers("HarryPoter.txt");
    }
    if (userCategory.category === "🎞️ Фильмы 🎞️") {
            play.play('./music/taran.mp3',{timeout: 60_000})
      arrOfObjs = await this.model.getQuestionsAndAnswers("Фильмы.txt");
    }
    for (const question of arrOfObjs) {
      counter = await this.view.pullQuestions(question, counter);
    }
    console.log(
      `Поздравляем, ты выиграл ${counter} очков в категории: ${userCategory.category}`
    );
    return value;
  }
}

module.exports = Controller;
