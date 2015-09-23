Meteor.methods({
    addGame: addGame
});

function addGame(nomeGame){
//    console.log("Adicionando game.");
//    console.log("this");
//    console.log(this);
//    
//    console.log("objeto");
//    console.log(objeto);

//    var nomeGame = target.nomeGame.value;
//    console.log(target);
    
    Games.insert({nome: nomeGame});
}

