const res = require("express/lib/response");

function adicionarManual() {
    div_mensagem.innerHTML = "";
    var tituloVar = document.getElementById('input_adicionar_titulo').value;
    var descricaoVar = document.getElementById('input_adicionar_descricao').value;
    var validacao = 0;

    var dataAtual = new Date();

    var ano = dataAtual.getFullYear();
    var mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda, se necessário
    var dia = ('0' + dataAtual.getDate()).slice(-2); // Adiciona um zero à esquerda, se necessário

    var dataFormatada = ano + '-' + mes + '-' + dia;

    div_mensagem.innerHTML = "";
    // var tituloVar = document.getElementById('inpt_nome_cad').value;
    // var cpf = document.getElementById('inpt_cpf_cad').value;
    // var descricaoVar = document.getElementById('inpt_email_cad').value;
    // var senhaVar = document.getElementById('inpt_senha_cad').value;
    // var confirmacaoSenhaVar = document.getElementById('inpt_confSenha_cad').value;
    // var validacao = 0;

    //SENHA


    if (tituloVar && descricaoVar == null) {
        div_mensagem.innerHTML += `<p class="erro">-Insira algum texto`;
        validacao = 1;
    }

    else {
        fetch("/manual/cadastrarManual", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUsuarioServer: sessionStorage.idUsuario,
                tituloServer: tituloVar,
                descricaoServer: descricaoVar,
                dataServer: dataFormatada
            }),

        }).then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((manual) => {
                    sessionStorage.ID_MANUAL = manual.insertId;
                })
            } else {
                alert('Manual não realizado')
                throw "Houve um erro"
            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                alert('Manual não realizado')
            })

        div_mensagem.style.display = "none";
        // alert('Parabens');


    }



}
function listarManual(){
    fetch("/manual/listarManual", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },

    }).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then((manual) => {
                console.log(manual);
            })
        } else {
            alert('Manual não realizado')
            throw "Houve um erro"
        }
    })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            alert('Manual não realizado')
        })
}
function atualizarManual(){
    fetch("/manual/atualizarManual", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },

    }).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then((manual) => {
                console.log(manual);
            })
        } else {
            alert('Manual não atualizado')
            throw "Houve um erro"
        }
    })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            alert('Manual não atualizado')
        })
}