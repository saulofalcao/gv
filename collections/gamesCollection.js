//exports.GameSchema = GameSchema;

Games = new Mongo.Collection("games");
TimeSchema = null;

MetaSchema = new SimpleSchema({
    descricao: {
        type: String,
        label: 'Descricao'
    },
    premio: {
        type: String,
        label: 'Prêmio para a meta'
    }

});


GameSchema = new SimpleSchema({
    nome: {
        type: String,
        label: 'Titulo',
        max: 200
    },
    metas: {
        type: [MetaSchema],
        minCount: 1
    }
//    times: {
//        type: [TimeSchema.id]
//    }
//    participantes: {
//        type: [ParticipanteSchema],
//        autoform: {
//            type: "select-checkbox",
////            options: Participantes.find()
//            options: function () {
//                var opcoesArray = [];
//                var checked = true;
//
//                var participantes = Participantes.find();
//                participantes.forEach(function (participante) {
//                    
//                    opcoesArray.push({label: participante.nome, value: participante._id, checked: checked});
//                });
//
//                return opcoesArray;
//            }
//        }
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


Games.attachSchema(GameSchema);