var hooksObject = {
    formToDoc: function (doc) {
//        console.log(doc);
        doc.posicoes.forEach(function(posicao){
           idJogador = posicao.jogador;
           posicao.jogador = Participantes.findOne({_id: idJogador});
           
        });
        return doc;
    },
//    
//    docToForm: function (doc) {
////        console.log(doc);
//        var id = doc._id;
//        var time = Times.findOne({_id: id});
//        var idJogadorDoc = null;
//        
//        time.posicoes.forEach(function(posicao){
//           idJogadorDoc = posicao.jogador._id;
//           $
//           
//        });
        
//        posicoes.forEach(function(posicao){
//           idJogador = posicao.jogador;
//           posicao.jogador = Participantes.findOne({_id: idJogador});
//           
//        });
//        return doc;
//    }
//    
    
};

AutoForm.hooks({
//    insereTimeForm: hooksObject,
//    atualizaTimeForm: hooksObject
});



