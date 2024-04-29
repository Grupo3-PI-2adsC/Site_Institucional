function cadastrar() {

    var nomeVar = document.getElementById('inpt_nome_cad').value;
    var cnpj = document.getElementById('inpt_cnpj_cad').value;
    var emailVar = document.getElementById('inpt_email_cad').value;
    var senhaVar = document.getElementById('inpt_senha_cad').value;
    var confirmacaoSenhaVar = document.getElementById('inpt_confSenha_cad').value;
    var validacao = 0;


    if (
        nomeVar.indexOf("#") >= 0 ||
        nomeVar.indexOf("@") >= 0 ||
        nomeVar.indexOf("!") >= 0 ||
        nomeVar.indexOf("%") >= 0 ||
        nomeVar.indexOf("*") >= 0 ||
        nomeVar.indexOf("$") >= 0 ||
        nomeVar.indexOf("&") >= 0
    ) {
        // div_mensagem.innerHTML += `-Não pode haver caracter especial no nome da empresa<br>`;

        validacao = 1;
    }

    //SENHA

    if (senhaVar.length < 8) {
        // div_mensagem.innerHTML += `-A senha deve possuir no mínimo 8 caracteres <br>`;
        validacao = 1;
    }

    if (senhaVar.indexOf(" ") >= 0) {
        // div_mensagem.innerHTML += `-Não pode conter espaços na senha <br>`;
        validacao = 1;
    }

    if (
        (
            senhaVar.indexOf("#") >= 0 ||
            senhaVar.indexOf("@") >= 0 ||
            senhaVar.indexOf("!") >= 0 ||
            senhaVar.indexOf("%") >= 0 ||
            senhaVar.indexOf("*") >= 0 ||
            senhaVar.indexOf("$") >= 0 ||
            senhaVar.indexOf("_") >= 0 ||
            senhaVar.indexOf("-") >= 0 ||
            senhaVar.indexOf("&") >= 0
        )
    ) {
        // div_mensagem.innerHTML += `-A senha deve possuir no mínimo 1 caracter especial <br>`;
        validacao != 1;
    }

    if (senhaVar != confirmacaoSenhaVar) {
        mensagem += `-Senhas incompatíveis`;
        validacao = 1;
    }

    //EMAIL

    if (!(emailVar.indexOf("@") >= 1)) {
        // div_mensagem.innerHTML += `-Deve conter @ no email<br>`;
        validacao = 1;
    }
    if (!(emailVar.indexOf(".com") >= 1)) {
        // div_mensagem.innerHTML += `-Deve conter .com no email <br>`;
        validacao = 1;
    }
    if (emailVar.indexOf(" ") >= 0) {
        // div_mensagem.innerHTML += `-Não pode conter espaços na email <br>`;
        validacao = 1;
    }

    if (validacao == 1) {
        // div_mensagem.style.display = "flex";

        alert('Burro');

    } else {
        // div_mensagem.style.display = "none";
        // alert('Parabens');

        animar('divCad', 'divCad2');
    }
}


function cadastrar2() {

    var cnpj = document.getElementById('inpt_cep_cad').value;
    var rua = document.getElementById('inpt_rua_cad').value;
    var bairro = document.getElementById('inpt_bairro_cad').value;
    var estado = document.getElementById('inpt_estado_cad').value;
    var cidade = document.getElementById('inpt_cidade_cad').value;
    var numero = document.getElementById('inpt_numero_cad').value;
    var complemento = document.getElementById('inpt_complemento_cad').value;
    var validacao = 0;

    var teste = [] 
    teste.push(cnpj)
    teste.push(rua)
    teste.push(bairro)
    teste.push(estado)
    teste.push(cidade)
    teste.push(numero)
    teste.push(complemento)

    console.log(teste)

    for (let i = 0; i < teste.length; i++) {
        const Atual = teste[i];
        if (
            Atual.indexOf("#") >= 0 ||
            Atual.indexOf("@") >= 0 ||
            Atual.indexOf("!") >= 0 ||
            Atual.indexOf("%") >= 0 ||
            Atual.indexOf("*") >= 0 ||
            Atual.indexOf("$") >= 0 ||
            Atual == ""             ||
            Atual == null           ||
            Atual.indexOf("&") >= 0
        ) {
            // div_mensagem.innerHTML += `-Não pode haver caracter especial nem espaços no endereço da empresa<br>`;
    
            validacao = 1;
        }

    }
    if (validacao == 1) {
        // div_mensagem.style.display = "flex";

        alert('Burro');

    } else {
        alert('Cadastrado')
        mudarTela('index');
    }
}




function animar(divUsar, divUsar2) {

    var div = document.getElementById(divUsar)
    var div2 = document.getElementById(divUsar2)

    // div.style.backgroundColor = 'yellow'

    div.style.animation = "aparecerBaquetaE 1s reverse";

    setTimeout(() => {
        div.style.display = "none";
    }, "900");


    div2.style.animation = "aparecerBaquetaE 2s forwards";

    setTimeout(() => {
        div2.style.display = "flex";
    }, "900");
}


function pesquisacep() {
    var valor = document.getElementById('inpt_cep_cad').value;
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    var validacep = /^[0-9]{8}$/;
    //Verifica se campo cep possui valor informado.
    if (cep != "" && validacep.test(cep)) {





        fetch('https://viacep.com.br/ws/' + cep + '/json/', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta);
    
              if (resposta.ok) {
                //alert('asdasdas')
                //alert(idUser)
    
                resposta.json().then((json) => {
                    //Atualiza os campos com os valores.
                    document.getElementById('inpt_rua_cad').value = (json.logradouro);
                    document.getElementById('inpt_bairro_cad').value = (json.bairro);
                    document.getElementById('inpt_cidade_cad').value = (json.localidade);
                    document.getElementById('inpt_estado_cad').value = (json.uf);
                });
              } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
            });
    }else{
        limpa_formulário_cep();
    }

};

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('inpt_rua_cad').value=("");
    document.getElementById('inpt_bairro_cad').value=("");
    document.getElementById('inpt_estado_cad').value=("");
    document.getElementById('inpt_cidade_cad').value=("");
}