/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:*/

const students = [
{
    name:"'Jorge'",
    test1: 5,
    test2: 2
},
{
    name:"'Erick'",
    test1: 8,
    test2:9
},
{
    name:"'Bruno'",
    test1: 7,
    test2: 7
},
{
    name:"'Matheus'",
    test1: 4,
    test2:4
},
{
    name:"'Sara'",
    test1: 7,
    test2:9
},

{
    name:"'Karen'",
    test1: 4,
    test2:3
}

]

function media( test1, test2) {
    return ((test1 + test2) / 2 ).toFixed(1)
}



/*Preferi deixar desse jeito por que foi como eu resolvi sozinho*/
/*Coloquei para a nota de aprovação ser de 7 ou mais, para mim ficou mais legal assim*/
function printStudentMedia(student) {
    return`
    A média do(a) aluno(a) ${student.name} é de: ${media(student.test1, student.test2)}
    ${student.name} Não foi dessa vez você está ${media(student.test1, student.test2) >= 7 ? "Aprovado" : "Reprovado"}
    `   
}


for (let student of students ) {
    let mediaMessage = printStudentMedia(student)
    alert(mediaMessage)
}