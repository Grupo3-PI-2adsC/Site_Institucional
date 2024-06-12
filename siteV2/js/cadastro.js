const res = require("express/lib/response");

function cadastrar() {
    // alert("asdlkmas")
    var sla = document.getElementById("input_1")
    var cpf = document.getElementById('inpt_cnpj_cad').value;
    div_mensagem.innerHTML = "";
    var nomeVar = document.getElementById('inpt_nome_cad').value;
    var emailVar = document.getElementById('inpt_email_cad').value;
    var senhaVar = document.getElementById('inpt_senha_cad').value;
    var confirmacaoSenhaVar = document.getElementById('inpt_confSenha_cad').value;
    var validacao = 0;

    // div_mensagem.innerHTML = "";
    // var nomeVar = document.getElementById('inpt_nome_cad').value;
    // var cpf = document.getElementById('inpt_cpf_cad').value;
    // var emailVar = document.getElementById('inpt_email_cad').value;
    // var senhaVar = document.getElementById('inpt_senha_cad').value;
    // var confirmacaoSenhaVar = document.getElementById('inpt_confSenha_cad').value;
    // var validacao = 0;


    if (
        nomeVar.indexOf("#") >= 0 ||
         nomeVar.indexOf("@") >= 0 ||
         nomeVar.indexOf("!") >= 0 ||
         nomeVar.indexOf("%") >= 0 ||
         nomeVar.indexOf("*") >= 0 ||
         nomeVar.indexOf("$") >= 0 ||
         nomeVar.indexOf("&") >= 0
     ) {
         div_mensagem.innerHTML += `<p class="erro">-Não pode haver caracter especial no nome da empresa<br>`;
         validacao = 1;
     }

     //SENHA

    if (senhaVar.length < 8) {
         div_mensagem.innerHTML += `<p class="erro">-A senha deve possuir no mínimo 8 caracteres <br>`;
         validacao = 1;
    }

     if (senhaVar.indexOf(" ") >= 0) {
         div_mensagem.innerHTML += `<p class="erro">-Não pode conter espaços na senha <br>`;
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
         validacao != 1;
     }else{
         div_mensagem.innerHTML += `<p class="erro">-A senha deve possuir no mínimo 1 caracter especial <br>`;
     }

     if (senhaVar != confirmacaoSenhaVar) {
         div_mensagem.innerHTML += `<p class="erro">-Senhas incompatíveis`;
         validacao = 1;
     }

     //EMAIL

     if (!(emailVar.indexOf("@") >= 0)) {
         div_mensagem.innerHTML += `<p class="erro">-Deve conter @ no email<br>`;
    
         validacao = 1;
     }
     if (!(emailVar.indexOf(".com") >= 0)) {
         div_mensagem.innerHTML += `<p class="erro">-Deve conter .com no email <br>`;
         validacao = 1;

     }
     if (emailVar.indexOf(" ") >= 0) {
         div_mensagem.innerHTML += `<p class="erro">-Não pode conter espaços na email <br>`;
         validacao = 1;
     }
    //  alert(cpf)
     var validacaoCpf = TestaCPF(cpf)
     validacaoCpf = !validacaoCpf
    //  alert(validacaoCpf)
     if(validacaoCpf){
         div_mensagem.innerHTML += `<p class="erro">-O CPF está incorreto <br>`;
         validacao = 1;
     }
     if (validacao == 1) {
         // div_mensagem.style.display = "flex";

     }
      else{
         fetch("/usuarios/cadastrar", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 // crie um atributo que recebe o valor recuperado aqui
                 // Agora vá para o arquivo routes/usuario.js
                 nomeServer: nomeVar,
                 cnpjServer: cpf,
                 emailServer: emailVar,
                 senhaServer: senhaVar
             }),

         }).then(function (resposta) {
             if (resposta.ok) {

                    // sessionStorage.ID_USUARIO = usuario.insertId;
                    animar('divCad', 'divCad2');
                    sla.checked = true;
             }else{
                 alert('cadastro não realizado')
                 throw "Houve um erro ao tentar realizar o cadastro"
             }
         })
             .catch(function (resposta) {
                 console.log(`#ERRO: ${resposta}`);
                 alert('cadastro não realizado')
             })

         div_mensagem.style.display = "none";
         // alert('Parabens');
 

    }


}
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    // alert(strCPF)
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
function deletarUsuario(id) {
    fetch(`/usuarios/deletar/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        if (response.ok) {
            // A exclusão foi bem-sucedida
            console.log("Usuário excluído com sucesso.");
            // Aqui você pode realizar alguma ação adicional, como atualizar a interface do usuário
        } else {
            // A exclusão falhou
            console.error("Falha ao excluir usuário.");
            // Aqui você pode lidar com o erro, exibir uma mensagem para o usuário, etc.
        }
    })
    .catch(function(error) {
        console.error("Erro ao tentar excluir usuário:", error);
        // Aqui você pode lidar com o erro, exibir uma mensagem para o usuário, etc.
    });
}



function cadastrar2() {


    var sla = document.getElementById("input_0")
    sla.checked = true;

    animar('divCad2', 'divCad3');
    // var fkEmpresa = sessionStorage.ID_USUARIO;
    // var cep = document.getElementById('inpt_cep_cad').value;
    // var rua = document.getElementById('inpt_rua_cad').value;
    // var bairro = document.getElementById('inpt_bairro_cad').value;
    // var estado = document.getElementById('inpt_estado_cad').value;
    // var cidade = document.getElementById('inpt_cidade_cad').value;
    // var numero = document.getElementById('inpt_numero_cad').value;
    // var complemento = document.getElementById('inpt_complemento_cad').value;
    // var validacao = 0;

    // var teste = []
    // teste.push(cep)
    // teste.push(rua)
    // teste.push(bairro)
    // teste.push(estado)
    // teste.push(cidade)
    // teste.push(numero)
    // // teste.push(complemento)

    // console.log(teste)

    // for (let i = 0; i < teste.length; i++) {
    //     const Atual = teste[i];
    //     if (
    //         Atual.indexOf("#") >= 0 ||
    //         Atual.indexOf("@") >= 0 ||
    //         Atual.indexOf("!") >= 0 ||
    //         Atual.indexOf("%") >= 0 ||
    //         Atual.indexOf("*") >= 0 ||
    //         Atual.indexOf("$") >= 0 ||
    //         Atual == "" ||
    //         Atual == null ||
    //         Atual.indexOf("&") >= 0
    //     ) {
    //         // div_mensagem.innerHTML += `-Não pode haver caracter especial nem espaços no endereço da empresa<br>`;

    //         validacao = 1;
    //     }

    // }
    // if (validacao == 1) {
    //     // div_mensagem.style.display = "flex";

    //     alert('Burro');

    // } else {
    //     fetch(`/cadastroEndereco/cadastrar`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({

    //             ruaServer: rua,
    //             bairroServer: bairro,
    //             cidadeServer: cidade,
    //             estadoServer: estado,
    //             cepServer: cep,
    //             numeroServer: numero,
    //             complementoServer: complemento,
    //             fkEmpresaServer: fkEmpresa
    //         }),

    //     }).then(function (resposta) {
    //         if (resposta.ok) {

    //             resposta.json().then((usuario) => {
    //                 alert('Cadastrado')
    //                 mudarTela('index');
    //             })
    //         }else{
    //             alert('cadastro não realizado')
    //             throw "Houve um erro ao tentar realizar o cadastro"
    //         }
    //     })
    //         .catch(function (resposta) {
    //             console.log(`#ERRO: ${resposta}`);
    //             alert('cadastro não realizado')
    //         })


    // }
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
    } else {
        limpa_formulário_cep();
    }

};

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('inpt_rua_cad').value = ("");
    document.getElementById('inpt_bairro_cad').value = ("");
    document.getElementById('inpt_estado_cad').value = ("");
    document.getElementById('inpt_cidade_cad').value = ("");
}