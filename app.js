var app = require('./config/server')
//rotas
//var rotaNoticias = require('./app/routes/noticias');
//var rotaHome = require('./app/routes/home');
//ou pode ser escrito assim
//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');

//rotaHome(app);
//rotaNoticias(app);
//rotaFormInclusaoNoticia(app);


app.listen(3000, function(){
    console.log('Serv ON');
});