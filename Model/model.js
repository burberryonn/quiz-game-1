const fs = require("fs").promises;
class Model {
  async getQuestionsAndAnswers(filePath) {
    const str = await fs.readFile(`./topics/${filePath}`, "utf-8");
    const arr = str.split("\n");
    const arrFromData = [];
    for (let i = 0; i < arr.length - 2; i += 3) {
      const objectFromData = {};
      const question = arr[i].trim();
      const value = arr[i + 1].trim();
      const choices = arr[i + 2];
      if (question && value) {
        objectFromData.question = question;
        objectFromData.answer = value;
        objectFromData.choices = choices.split(", ");
        arrFromData.push(objectFromData);
      }
    }
    return arrFromData;
  }
}
module.exports = Model;
