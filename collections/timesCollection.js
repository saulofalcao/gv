Times = new Mongo.Collection("times");

//GameSchema = require('./gamesCollection.js');

TimeSchema = new SimpleSchema({
    nome: {
        type: String,
        label: "Nome do Time"
    },
    jogos: {
      type: Array  
    },
    
    "jogos.$": {
      type: Object
    },
    
    "jogos.$.game_id": {
        type: GameSchema.id,
        autoform: {
            type: 'select',
            options: function(){
                var nomesGames = [];
                var games = Games.find();
                
                games.forEach(function(game){
                    nomesGames.push({label: game.nome, value: game._id});
                });
//                console.log(nomesGames);
                return nomesGames;
                    
                
            }
        }
    },
    posicoes: {
        type: Array
    },
    "posicoes.$": {
        type: Object
    },
    "posicoes.$.nome": {
        type: String,
        allowedValues: ['Atacante', 'Meio de Campo', 'Zagueiro'],
        label: "Nome da Posição",
        autoform: {
            firstOption: "Selecione uma posição de jogador disponível: "
        }
    },
    "posicoes.$.jogador_id": {
        type: ParticipanteSchema.id,
        label: "Escolha um Participante",
        autoform: {
            type: "select",
            options: function () {
                var nomesParticipantes = [];
                var participantes = Participantes.find();
//                var time = Times.findOne({_id: Router.current().params.id } );
                
                
                participantes.forEach(function (participante) {
//                    console.log(Router.current().params.id);
//                    if (Router.current().params.id === participante._id) {
//                        nomesParticipantes.push({label: participante.nome, value: participante._id, class: 'selected'});
//                    }
//                    else {
                        nomesParticipantes.push({label: participante.nome, value: participante._id });

//                    }
                });
                return nomesParticipantes;
            }
        }
    }



});

Times.attachSchema(TimeSchema);