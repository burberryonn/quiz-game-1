const Model = require('./Model/model');
const Controller = require('./Controller/controller');
const View = require('./View/view');
const play = require('play-sound')();
const keypress = require('keypress');
const model = new Model();
const view = new View();
const controller = new Controller(model, view);


let value = '';
async function startnew(value) {
    const res = await controller.runQuiz(value);
    startnew(res);
}
startnew(value);


process.stdin.on('keypress', (ch, key) => {
  if (key && key.name === 'space') {
    play.play('./music/Applause.mp3')
  }
  if (key && key.name === 'u') {
    play.play('./music/Hedwig.mp3',{timeout: 60_000})
  }
  if (key && key.name === 'i') {
    play.play('./music/nlo.mp3',{timeout: 7_000})
  }
  if (key && key.name === 'o') {
    play.play('./music/nlo_false.mp3',{timeout: 4_000})
  }
  if (key && key.name === 'p') {
    play.play('./music/kill.mp3',{timeout: 4_000})
  }
})