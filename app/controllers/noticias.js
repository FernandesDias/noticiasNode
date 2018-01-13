module.exports.noticias = function(application,req,res){
    //carrega o modulo de conexao
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);
    //pega a variavel do server ja modularizado para nao criar varias conexao
    noticiasModel.getNoticias(function(erro, result){
        res.render("noticias/noticias", {noticias: result});
        // connection.query('select * from noticias',);
    });
    // res.render("noticias/noticias")
}

module.exports.noticia = function(application,req,res){
    //estabelecer conexao com o banco
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.noticiasDAO(connection);
    
    var id_noticia = req.query;
    
    noticiaModel.getNoticia(id_noticia,function(error,result){
        res.render("noticias/noticia", {noticia: result});
    });
}