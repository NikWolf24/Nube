import { userstate, loginout } from '../controllers/Global.js'

userstate()

const sesion = document.getElementById('btnlogout')

async function cerrarsesion(){

    const verificar=loginout()
    const comprobar = await verificar

    .then((comprobar)=>{
        alert('Sesion Cerrada')
        window.location.href="../InicioIndex.html"
    })
    .catch((error)=>{
        
        alert('Sesion no Cerrada')
    })
}

window.addEventListener('DOMContentLoaded', async()=>{
    sesion.addEventListener('click', cerrarsesion)
})