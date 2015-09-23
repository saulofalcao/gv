//Template.registerHelper("opcoesCheckbox", opcoesCheckbox);


Template.atualizaGame.helpers({
    log: log,
    standalone: ehStandalone,
//    participantes: getParticipantes(),
    opcoesCheckbox: opcoesCheckbox,
//    ehParticipante: function(){
//        console.log(this);
//    }
//    todosParticipantes: Template.participantes.helpers.participantes
    ehParticipante: ehParticipante
});

Template.atualizaGame.events({
    "submit #novoGame": novoGame,
});

/////////////////////////////
function ehStandalone() {
//    console.dir(Router.current().route.getName());
    if (Router.current()) {
        console.dir(Router.current());
        var testeRota = /atualizaGame/.test(Router.current().route.getName());

        if (testeRota) {
//            console.log("retorna true");
            return true;
        }
        else {
//            console.log("retorna false")
            return false;
        }
    }
//    console.log("nao entrou no if. retorna false");
    return false;



}

function log() {
    if (arguments) {
        var args = Array.prototype.slice.call(arguments);
//        console.log("com argumentos");
        console.dir(args[0]);
    }
    else {
//        console.log("sem argumentos");
//        console.log(this);
    }
}

function novoGame(event) {
    event.preventDefault();
    var metas = [];
    var nomeGame = event.target.nomeGame.value;

    console.dir(event.target);

    Meteor.call("addGame", nomeGame);
//    Games.insert({nome: nomeGame});

//    event.target.nomeGame.value = "";
}

function getParticipantes() {

}

function opcoesCheckbox() {
    var opcoesArray = [];
    var checked = true;

    var participantes = Participantes.find();
    participantes.forEach(function (participante) {
//        console.log(this);
        opcoesArray.push({label: participante.nome, value: participante._id});
    });

    return opcoesArray;
}

function ehParticipante() {
//    console.log(teste);
//    if (this.value)

    var participante = this;

    var game = Session.get('game');
    console.log('game:');
    console.log(game);

    if (game) {
        if (game.participantes.indexOf(participante) !== -1) {
            console.log('este participante: ' + participante.nome + 'participa do game: ' + game.nome);
        }
        else {
            console.log('este participante: ' + participante.nome + 'NÃO participa do game: ' + game.nome);
        }
    }
    console.dir(this);
    return true;
}

