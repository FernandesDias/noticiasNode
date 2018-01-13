module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao: {}, noticia:{}})
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;
    
    req.assert('titulo','Título é Obrigatório').notEmpty();
    req.assert('resumo','Resumo é Obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('data_noticia','Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','Noticia é Obrigatório').notEmpty();
    
    var erros = req.validationErrors();
    
    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
        return;
    }
    
    //recuperar conexao
    //recuperar model
    //salvar Noticia (funcao)
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);
    
    noticiasModel.salvarNoticia(noticia,function(erro, result){
        res.redirect('/noticias');
    });
}