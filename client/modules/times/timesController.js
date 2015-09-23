
Template.times.helpers({
    times: getTimes,
    apagaTime: apagaTime,
    jogadorNome: jogadorNome,
    jogos: getJogosQueOTimeParticipa
//    novoTime: novoTime
});
Template.times.events({
    "click .apagaTime": apagaTime
//    "click .editaTime": editaTime
});

////////////////////////

function getTimes() {
    var times = Times.find({});
//    alert(jogos);
//    console.dir(jogos);
    return times;
}

function apagaTime() {
//    console.log(this);
    var gameId = this._id;
//    var game = Times.findOne(gameId);
//    console.dir(game);
    Times.remove(gameId);
}

function editaTime() {
    var gameId = this._id;
    console.log('gamesControllmer.js - gameId:');
    console.log(gameId);
//    Times.update(gameId);
}

function jogadorNome(teste) {
    var jogador = Participantes.findOne({_id: this.jogador_id});
    return jogador.nome;
}

function getJogosQueOTimeParticipa() {
    // pegar os ids dos jogos do time atual
    // pegar os times com os ids dos jogos
    var idsDosJogosDoTimeAtual = [];
    var time = Times.findOne({_id: this._id});
    var jogosDoTimeAtual = [];

    time.jogos.map(function (jogo) {
        idsDosJogosDoTimeAtual.push(jogo.game_id);
    });
    _.map(idsDosJogosDoTimeAtual, function (idDoJogo) {
        jogosDoTimeAtual.push(Games.findOne({_id: idDoJogo}));
    });

    return jogosDoTimeAtual;
}

