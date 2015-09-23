Metricas = new Mongo.Collection("metricas");

MetricaSchema = new SimpleSchema({
    nome: {
        type: String,
        label: 'Nome da Métrica'
    },
    peso: {
        type: Number,
        label: 'Peso da Métrica',
        defaultValue: 1
    },
    game_id: {
        type: GameSchema.id,
        label: 'Jogo',
        autoform: {
            type: 'select',
            options: function(){
                var nomesGames = [];
                var games = Games.find();
                
                games.forEach(function(metrica){
                    nomesGames.push({label: metrica.nome, value: metrica._id});
                });
//                console.log(nomesGames);
                return nomesGames;
            }
        }
    }
//    metas: {
//        type: [MetaSchema],
//        minCount: 1
//    }
});

if (Meteor.isClient) {
    Meteor.startup(function () {
        Tracker.autorun(function () {
            var context = GameSchema.namedContext("myContext");
            if (!context.isValid()) {
                console.log(context.invalidKeys());
            }
        });
    });
}


Metricas.attachSchema(MetricaSchema);