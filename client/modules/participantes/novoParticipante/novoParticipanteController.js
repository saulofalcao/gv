Template.novoParticipante.helpers({
    log: log,
    standalone: ehStandalone
});

Template.novoParticipante.events({
//    "submit #novoParticipante": novoParticipante,
    
});

/////////////////////////////
function ehStandalone() {
//    console.dir(Router.current().route.getName());
    if (Router.current()) {
        if ("novoParticipante" === Router.current().route.getName()) {
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
//        console.dir(args);
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

