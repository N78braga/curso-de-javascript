function Calculadora(){
    this.dispaly = document.querySelector('.display');


    this.iniciar = () =>{
        this.cliquebotoes();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.dispaly.addEventListener('keypress', e => {
            if (e.KeyCode === 13){
                this.resultado();
            } 
        });
    };

    this.cliquebotoes = () =>{
        document.addEventListener('click', event =>{
            const elmento = event.target;
            if(elmento.classList.contains('btn-num')) this.adicionarNumDisplay(elmento);
            if(elmento.classList.contains('btn-clear')) this.clear();
            if(elmento.classList.contains('btn-del')) this.del();
            if(elmento.classList.contains('btn-eq')) this.resultado(elmento);
        });
    };

    this.adicionarNumDisplay = elemento =>{
        this.dispaly.value += elemento.innerText;
        this.dispaly.focus();
    };
    this.clear = () => this.dispaly.value = ' ';
    this.iniciar = () => this.cliquebotoes();
    this.del = () => this.dispaly.value = this.dispaly.value.slice(0, -1);

    this.resultado = () => {
        let conta = this.dispaly.value;

        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida');
                return;
            }
            this.dispaly.value = String(conta);
        }catch(evento){
            alert('Conta inválida');
            return;
        }
    };


}

const calculadora = new Calculadora();
calculadora.iniciar();