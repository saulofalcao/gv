 Template.adicionarMeta.events({
     "click #adicionarMeta": adicionarMeta
 });
 
 
 /////////////////
 
function adicionarMeta(event) {
    event.preventDefault();
    var htmlAddMeta = '<div class="form-group"><label>Meta: <input type="text" class="form-control" id="descricaoMeta"/></label>\n\
<label>Prêmio: <input type="text" class="form-control" id="premioMeta"/></label></div>';
    
    $('.wrapperAdicionarMeta').append(htmlAddMeta);
    console.log('entrou em adicionarMeta');
}
