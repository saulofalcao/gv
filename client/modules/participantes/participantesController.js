//Template.registerHelper("participantes", getParticipantes);

Template.participantes.helpers({
    participantes: getParticipantes,
    apagaParticipante: apagaParticipante
//    novoParticipante: novoParticipante
});
Template.participantes.events({
    "click .apagaParticipante": apagaParticipante
//    "click .editaParticipante": editaParticipante
});

////////////////////////

function getParticipantes() {
    var participantes = Participantes.find({});
//    alert(jogos);
//    console.dir(jogos);
    return participantes;
}

function apagaParticipante(){
//    console.log(this);
var gameId = this._id;
//    var game = Participantes.findOne(gameId);
//    console.dir(game);
    Participantes.remove(gameId);
}

function editaParticipante() {
    var gameId = this._id;
    console.log('gamesControllmer.js - gameId:');
    console.log(gameId);
//    Participantes.update(gameId);
}


