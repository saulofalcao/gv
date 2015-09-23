Template.atualizaTime.helpers({
    log: log,
    standalone: ehStandalone,
    opcoesSelecionaJogador: opcoesSelecionaJogador
});

Template.atualizaTime.events({
    "submit #atualizaTimeSubmit": atualizaTime,
});

/////////////////////////////
function ehStandalone() {
//    console.dir(Router.current().route.getName());
    if (Router.current()) {
        console.dir(Router.current());
        var testeRota = /atualizaTime/.test(Router.current().route.getName());

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
    }
}

function atualizaTime(event) {
    event.preventDefault;

    console.log(this);

}

function opcoesSelecionaJogador() {
    var nomesParticipantes = [];
    var participantes = Participantes.find();

    participantes.forEach(function (participante) {
        nomesParticipantes.push({label: participante.nome, value: participante._id, class:"oioioi"});
    });
    return nomesParticipantes;

}


