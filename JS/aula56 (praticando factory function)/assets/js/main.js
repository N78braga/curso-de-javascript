function criaCalculadora(){
    return {
        // atributos e variáveis
        display: document.querySelector('.display'),
        
        inicia(){// método de iniciar
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.resultado();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
        clearDisplay(){
            this.display.value = ' ';
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        resultado(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
            }
            return;
        },

        cliqueBotoes() {
            document.addEventListener('click', event => {
                const elemento = event.target;
                
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(elemento.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.resultado();
                }
            });
        },
     
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();