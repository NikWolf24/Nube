import{verification} from './Global.js'

const enviar = document.getElementById('verificationbtn')

async function verificacion(){

    const verificar = verification()
    
}
window.addEventListener('DOMContentLoaded', async()=>{
    enviar.addEventListener('click', verificacion)
})