
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    let nav = document.querySelector('#nav_logo')
    let login = document.querySelector('#btn-login')
    
    header.classList.toggle('rolagem', window.scrollY > 300)
    header.classList.toggle('rolagem2', window.scrollY > 3500)
    nav.classList.toggle('rolagem2', window.scrollY > 3500)
    login.classList.toggle('rolagem2', window.screenY > 3500)
})        

function mudarTela(tela){
    window.location.href =`${tela}.html`
}