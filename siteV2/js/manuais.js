
function criarManual() {

    var titulo = document.getElementById('titulo');
    var descricao = document.getElementById('textarea_descricao');
    var valorTitulo = titulo.value;
    var valorDescricao = descricao.value;
    var idUsuario = sessionStorage.ID_USUARIO; // "memoria cache (navegador)"

    const isWhitespaceString = str => !str.replace(/\s/g, '').length

    if (valorTitulo == null || isWhitespaceString(valorTitulo)) {

        alert("Título Inválido!\nEscreva algo.");
        return;
    }

    if (valorDescricao == null || isWhitespaceString(valorDescricao)) {

        alert("Descrição Inválido!\nEscreva algo.");
        return;
    }


    // empacotar as informações e mandar para rota
    //
    fetch("/manuais/adicionar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tituloServer: valorTitulo,
            descricaoServer: valorDescricao,
            idUsuarioServer: idUsuario
        })
    })
    .then(function (resposta) { // retorna controller
        alert("entrei");
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.status == 500) { // deu bom
            console.log("Houve um erro ao tentar adicionar um manual.");
            resposta.text().then(texto => {
                console.error(texto);
            });
        } else { // erro model
            alert("Você adicionou um novo manual.👍")
            resposta.json().then(json => {
            });
        }

    })
    .catch(function (erro) { // erro no controller
        alert("falhou controller");
        alert(erro);
        console.log(erro);
    });

}