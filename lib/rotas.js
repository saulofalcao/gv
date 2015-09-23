Router.route('/atualizaGame/:id', function () {
    var game = Games.findOne({_id: this.params.id});
    Session.set('game',game);
    this.render('atualizaGame', {data: game});
//    console.log('routas.js - game:');
//    console.log(game);
});

Router.route('/atualizaParticipante/:id', function () {
    console.log('rotas.js - id');
    console.log(this.params.id);
    var participante = Participantes.findOne({_id: this.params.id});
    console.log('rotas.js - participante');
    console.log(participante);
    this.render('atualizaParticipante', {data: participante});
//    console.log('routas.js - game:');
//    console.log(game);
});

//Router.route('/participantes', function () {
//    this.render('participantes');
//});
Router.route('/atualizaTime/:id', function () {
    var time = Times.findOne({_id: this.params.id});
    this.render('atualizaTime', {data: time});
//    console.log('routas.js - game:');
//    console.log(game);
});

Router.route('/atualizaMetrica/:id', function () {
    var metrica = Metricas.findOne({_id: this.params.id});
//    Session.set('game',game);
    this.render('atualizaMetrica', {data: metrica});
//    console.log('routas.js - game:');
//    console.log(game);
});


