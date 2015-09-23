Template.novoGame.helpers({
    log: log,
    standalone: ehStandalone
});

Template.novoGame.events({
    "submit #novoGame": novoGame,
    
});

/////////////////////////////
function ehStandalone() {
//    console.dir(Router.current().route.getName());
    if (Router.current()) {
        if ("novoGame" === Router.current().route.getName()) {
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

function novoGame(event) {
    event.preventDefault();
    var metas = [];
    var nomeGame = event.target.nomeGame.value;
    
    console.dir(event.target);

    Meteor.call("addGame", nomeGame);
//    Games.insert({nome: nomeGame});

//    event.target.nomeGame.value = "";
}

