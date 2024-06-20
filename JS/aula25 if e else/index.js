/**
 * Conhecendo a estrutura de condição if e else
 * 
 * Criando uma comparação entre os horarios
 * Entre 0 - 11 - Boa dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 Boa Noite
 * 
 * If pode ser usado só ou aninhado com else if ou else
 * Sempre que utilizo a palavra else, preciso de um if antes porem para 
 * um if não é necessariamente de um else
 * Posso usar varios if else if quanto for necessario e inclisive dentro 
 * do else eu posso usar um if e else if também
 * Posso só ter um else  da checagem do if 
 */

const hora = 23;
if(hora < 12){
    console.log('Bom dia');
}else if (hora >= 12 && hora < 18){
    console.log('Boa tarde');
}else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite');
}