// const res = require("express/lib/response");

function adicionarManual() {
    div_mensagem.innerHTML = "";
    var tituloVar = document.getElementById('titulo').value;
    var descricaoVar = document.getElementById('textarea_descricao').value;
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
          
                idUsuarioServer: sessionStorage.ID_USUARIO,
                tituloServer: tituloVar,
                descricaoServer: descricaoVar,
                dataServer: dataFormatada
            }),

        }).then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta);
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
                manual.forEach(element => {
                    element.dtCriacao = new Date(element.dtCriacao);
                    document.getElementById("historicoManuais").innerHTML += `
                    <div class="manual">
                    <div class="itemManual headerManual">
                        <span>${element.tituloManual}</span>
                        <div class="pencil" onclick="editarManual(${element.idManual},'${element.tituloManual}', '${element.descricaoManual}')">
                            <i class="bi bi-pencil"></i>
                        </div>
                    </div>

                    <div class="itemManual textoManual">
                        <span>${element.descricaoManual}</span>
                    </div>

                    <div class="itemManual footerManual">
                        <div class="item-footer-manual divCriacao">
                            <div>
                                <p><b>Criado por:</b> ${element.nome}</p>
                            </div>
                        </div>
                
                    </div>
                </div>`
                });
            })
        } else {
            alert('Manuais não listados')
            throw "Houve um erro"
        }
    })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            alert('Manuais não listados')
        })
}
function atualizarManual(idManualVar){
    div_mensagem.innerHTML = "";
    var tituloVar = document.getElementById('titulo_alterar').value;
    var descricaoVar = document.getElementById('descricao_alterar').value;
    
    fetch("/manual/atualizarManual", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idManualServer: idManualVar,
            tituloServer: tituloVar,
            descricaoServer: descricaoVar,
        }),

    }).then(function (resposta) {
        if (resposta.ok) {
            window.location = "";
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
function removerManual(idManual){
    div_mensagem.innerHTML = "";

    fetch(`/manual/removerManual/${idManual}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },

    }).then(function (resposta) {
        if (resposta.ok) {
            window.location = "";
        } else {
            alert('Manual não removido')
            throw "Houve um erro"
        }
    })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            alert('Manual não removido')
        })
}