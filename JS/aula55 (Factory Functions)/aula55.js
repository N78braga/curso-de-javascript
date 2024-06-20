/**
 * Funções fabricas 
 * O que é uma função fabrica
 * São as funções que retorna os objetos
 */
function criaPessoa(nome, sobreNome, peso, altura){
    return{
        nome, sobreNome,

        // Getter 
        get nomeCompleto(){
            return `${this.nome} ${this.sobreNome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ');
        
        },
        fala(assunto = 'falando sobre this'){// a maneira mas curta de escreve uma função sem a palavra function e os dois pontos
            return `${this.nome} tem ${this.peso} kg e está ${assunto}.`;
        },
        peso: peso,
        altura: altura,
        // Chamando o GETTER no método
         get imc(){ //fazendo com que o método ser passe por um atributo usando o [ get ] para elimenar os () quando for chamado 
            const indice = this.peso /(Math.pow(altura,2));
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Paulo', 'Otávio', 80, 1.8);
//console.log(p1.nomeCompleto);// Chamando No console.log o método nomeCopleto sem () por causa da palavra resevada get
p1.nomeCompleto = 'Flavio dos Santos';
console.log(p1.nome);
console.log(p1.sobreNome);
console.log(p1.nomeCompleto);
console.log(p1.fala());