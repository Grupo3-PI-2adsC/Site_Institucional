function acessar() {

  var email = ipt_email.value;
  var senha = ipt_senha.value;

  if (email.indexOf('@') >= 0 && (email.indexOf('.') >= 0 || email.indexOf('com') >= 0) && senha.length >= 8 ) {
 //PARA LOGAR NO SISTEMA
 fetch("/usuarios/autenticar", {
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
      emailServer: email,
      senhaServer: senha
  })
}).then(function (resposta) {
  console.log("ESTOU NO THEN DO entrar()!")

  if (resposta.status == 200) {

      resposta.json().then(json => {
          // console.log(json[0].nomeFantasia); //vetor, pegando o nomeFantasia do primeiro item
          console.log(JSON.stringify(json));
          sessionStorage.EMAIL_USUARIO = json[0].email;
          sessionStorage.NOME_USUARIO = json[0].nome;
          sessionStorage.ID_USUARIO = json[0].idEmpresa; 
          window.location.href = "telaUsuario.html";
          // apenas para exibir o loading
      });

  } else {
    div_mensagem.innerHTML = '<p class="erro">E-mail ou Senha inválidos<br></p>'

      console.log("Houve um erro ao tentar realizar o login!");
      resposta.text().then(texto => {
          console.error(texto);
      });
  }

}).catch(function (erro) {
  console.log(erro);
})


  }
 
}