// IIFE -> Immediately invoked function expression

/**
 * Criando uma função  que sera acionada automaticamente sem a mesma esta goblalmente alocada 
 */
/*(function(){
    const sobreNome = 'Braga';
    function criaNome(nome){
        return `${nome} ${sobreNome}`;
    }
    function falaNome(){
        console.log(criaNome('Ernando'));
    }
    falaNome();
})();*/

(function(idade, peso, altura){
    const sobreNome = 'Braga';
    function criaNome(nome){
        return `${nome} ${sobreNome}`;
    }
    function falaNome(){
        console.log(criaNome('Ernando'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
