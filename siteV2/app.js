// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./routes/index");
var usuarioRouter = require("./routes/usuarios");
// var empresasRouter = require("routes/empresas");
var cadastroEnderecoRouter = require("./routes/cadastroEndereco");
var computadorRouter = require("./routes/computador");
var manualRouter = require("./routes/manual");
var manuaisRouter = require("./routes/manuais");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../siteV2")));
app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
// app.use("/empresas", empresasRouter);
app.use("/cadastroEndereco", cadastroEnderecoRouter);
app.use("/computador", computadorRouter);
app.use("/manual", manualRouter);
app.use("/manuais", manuaisRouter);



app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});