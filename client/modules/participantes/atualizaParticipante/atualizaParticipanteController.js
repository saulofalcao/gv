Template.atualizaParticipante.helpers({
    log: log,
    standalone: ehStandalone
});

Template.atualizaParticipante.events({
//    "submit #novoParticipante": novoParticipante,
    
});

/////////////////////////////
function ehStandalone() {
//    console.dir(Router.current().route.getName());
    if (Router.current()) {
        console.dir(Router.current());
        var testeRota = /atualizaParticipante/.test(Router.current().route.getName());
        
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

//function novoParticipante(event) {
//    event.preventDefault();
//    var metas = [];
//    var nomeParticipante = event.target.nomeParticipante.value;
//    
//    console.dir(event.target);
//
//    Meteor.call("addParticipante", nomeParticipante);
////    Participantes.insert({nome: nomeParticipante});
//
////    event.target.nomeParticipante.value = "";
//}

