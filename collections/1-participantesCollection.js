Participantes = new Mongo.Collection("participantes");

ParticipanteSchema = new SimpleSchema({
    _id: {
      type: String,
      optional: true, 
      autoform: {
          type: 'hidden'
      }
    },
    nome: {
        type: String,
        label: "Nome do Participante"
//        required: true
    },
    email: {
        type: String,
        label: "E-mail do Participante"
//        required: false
    }
});

Participantes.attachSchema(ParticipanteSchema);


