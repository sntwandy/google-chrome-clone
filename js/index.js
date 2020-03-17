const searchBtn = document.getElementById('search-button')
const luckyBtn = document.getElementById('lucky-button')

function clickSearch(){
    searchBtn.addEventListener('click', ()=>{
        swal('No te encuentro :(', '"Hoy decidi buscarte con google y no te encontre, pero al buscarte con suerte lo logre..." 2.6 ♥', 'error')
    })
    removeEventsListener(searchBtn)
}

function clickLucky(){
    luckyBtn.addEventListener('click', () => swal('Te encontre ;)', '"Luego de encontrarte, me di cuenta que no era la suerte el hecho de encontrarte, era mi corazon enamorado que no paraba de buscarte..." 2.6 ♥', 'success'))
    removeEventsListener(luckyBtn)
}

const removeEventsListener = (btn) =>{
    btn.removeEventListener('click', ()=>{})
}