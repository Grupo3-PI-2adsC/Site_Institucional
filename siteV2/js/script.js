
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
    header.classList.toggle('rolagem2', window.scrollY > 3000)
})        

function mudarTela(tela){
    window.location.href =`${tela}.html`
}

