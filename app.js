const Model = require('./Model/model');
const Controller = require('./Controller/controller');
const View = require('./View/view');

const model = new Model();
const view = new View();
const controller = new Controller(model, view);


let value = '';
async function startnew(value) {
    const res = await controller.runQuiz(value);
    startnew(res);
}
startnew(value);