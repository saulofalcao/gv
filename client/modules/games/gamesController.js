Template.games.helpers({
    games: getGames,
    apagaGame: apagaGame,
    times: getTimesDoJogo
//    novoGame: novoGame
});
Template.games.events({
    "click .apagaGame": apagaGame
//    "click .editaGame": editaGame
});

////////////////////////

function getGames() {
    var jogos = Games.find({});
//    alert(jogos);
//    console.dir(jogos);
    return jogos;
}

function apagaGame(){
//    console.log(this);
var gameId = this._id;
//    var game = Games.findOne(gameId);
//    console.dir(game);
    Games.remove(gameId);
}

function editaGame() {
    var gameId = this._id;
    console.log('gamesControllmer.js - gameId:');
    console.log(gameId);
//    Games.update(gameId);
}

function getTimesDoJogo() {
    var gameId = this._id;
//    console.log(gameId);
    var timesDoJogo = Times.find({jogos: { game_id: gameId}});
//    console.log(timesDoJogo);
    return timesDoJogo;
    
    
}


