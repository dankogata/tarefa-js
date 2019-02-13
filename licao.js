//LIÇÃO DE CASA

/* o usuario vai definir qual é o tamanho de uma escada que ele gostaria. Vc tem qye desenhar a escada no console de acordo com esse tamanho. Exemplo:
usuario: 5 lances
saida:
#
##
###
####
#####*/
let tamanho= Number(prompt('Qual o tamanho da escada a ser utilizada?'));
let material = prompt ('qual o material utilizado?');

let leitor = material;
valor = 1;

while(valor< tamanho){
    console.log(material);
    material = material + valor;
    
}


/*Bonus:
O usuario escolhe qual o materia da escada. Exemplo:
usuario: 5 lances , material @
saida:
@
@@
@@@
@@@@
@@@@@
*/