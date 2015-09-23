Pontuacoes = new Mongo.Collection("pontuacoes");

PontuacaoSchema = new SimpleSchema({
    jogador_id: {
        type: ParticipanteSchema.id,
        label: 'Participante'
    },
    metrica_id: {
        type: MetricaSchema.id,
        label: 'Métrica dos pontos'
    },
    qtd_pontos: {
        type: Number,
        label: 'Quantidade de Pontos'
    }
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


Pontuacoes.attachSchema(PontuacaoSchema);