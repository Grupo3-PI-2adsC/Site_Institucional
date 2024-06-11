
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 300)
    header.classList.toggle('rolagem2', window.scrollY > 2900)
})        

function mudarTela(tela){
    window.location.href =`${tela}.html`
}
