<h1> Daesc </h1>

> Status: desenvolvimento ⚠️

## Objetivo
* Criar um site onde seja póssivel comunicar a empresa de água da cidade (Daesc), que em determinada região ficou sem água.

### Funcionalidades 
* Melhorar a comunicação com um orgão público da cidade.
* Fazer simulações para simulação uma quitação de dívida.


## Tecnologias utilizadas 
<table> 
<tr>
<td>Node.JS </td>
<td> MySql </td>
<td>javaScript </td>
</tr>
<tr>
<td>v18.15.0</td>
<td>v8.0.21</td>
<td>ECMAScript 2022</td>
</tr>

</table>


### Modelo em alta fidelidade
* <a href = "https://www.figma.com/file/Aeboe8zfAXq3nheiBtrRKn/StoryBoard%2F%2FKau%C3%A3?node-id=0%3A1" > Figma </a> 


 ### Estrutura de Dados
 
 * Possibilidade de fazer login e criar um novo usuário 
 ~~~~MySql
     const Usuario = sequelize.define('usuarios',{ 
    nome: { 
        type: Sequelize.STRING(30) 
    },
    sobrenome: {
        type: Sequelize.STRING(30)
    },
    idade:{
        type: Sequelize.INTEGER(2)
    },
    email: {
        type: Sequelize.STRING(50)
    },
    senha: {
       type: Sequelize.STRING(30)
    }
});
~~~~
