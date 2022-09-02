const user = document.querySelector('#user');
const password = document.querySelector('#password');
const btn = document.querySelector('#login');

class Dados {
    constructor() {
        this.count = 0
        this.inform = []
    }

    get click() {
        return this.logar()
    }

    logar() {
            if(user.value != '' && password.value != ''){
                this.inform.push({
                    id: this.count,
                    login: user.value,
                    password: password.value
                    })
                    return this.inform
            } else{
                console.log('Dados errados')
            }

            this.count++
    }
}

const d1 = new Dados()

