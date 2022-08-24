const user = document.querySelector('#user');
const password = document.querySelector('#password');
const btn = document.querySelector('#login');

let inform = [];
let conta = 0 


function Dados(){
    Dados.prototype.click = () => {btn.addEventListener('click',() => {
        if(user.value != '' && password.value != ''){
        const valorUser = user.value
        const valorPass = password.value
        inform[conta] = {
            user: valorUser,
            password: valorPass
        }
        console.log(inform)
        return conta++
    } else{
        console.log('Dados invalidos')
    }
    })    
    }
    
}

const dados = new Dados();

dados.click()








