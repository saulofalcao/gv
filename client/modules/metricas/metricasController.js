Template.metricas.helpers({
    metricas: getMetricas,
    apagaMetrica: apagaMetrica,
    game: getGame
//    times: getTimesDoJogo
//    novoMetrica: novoMetrica
});
Template.metricas.events({
    "click .apagaMetrica": apagaMetrica
//    "click .editaMetrica": editaMetrica
});

////////////////////////

function getMetricas() {
    var metricas = Metricas.find({});
//    alert(jogos);
//    console.dir(jogos);
    return metricas;
}

function apagaMetrica(){
//    console.log(this);
var metricaId = this._id;
//    var metrica = Metricas.findOne(metricaId);
//    console.dir(metrica);
    Metricas.remove(metricaId);
}

function editaMetrica() {
    var metricaId = this._id;
    console.log('metricasControllmer.js - metricaId:');
    console.log(metricaId);
//    Metricas.update(metricaId);
}

function getGame() {
    var gameId = this.game_id;
//    console.log(metricaId);
    var game = Games.findOne({_id: gameId});
//    console.log(timesDoJogo);
    return game;
    
    
}


