<h1> Daesc </h1>

> Status: desenvolvimento ⚠️

## Objetivo
* Criar um site onde seja póssivel comunicar a empresa de água da cidade (Daesc), que em determinada região ficou sem água.

### Funcionalidades 
* Melhorar a comunicação com um órgão público da cidade.
* Fazer simulações para quitar dívidas.


### Tecnologias utilizadas 
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
 
 * Fazer login e criar um novo usuário 
 ~~~~MySql
     const Usuario = bd.sequelize.define('usuarios', {

    nome: {
        type: bd.Sequelize.STRING(30)
    },

    sobrenome: {
        type: bd.Sequelize.STRING(30)
    },

    email: {
        type: bd.Sequelize.STRING(50)
    },

    senha: {
        type: bd.Sequelize.STRING(30)
    }
    
});
~~~~

* Formulário para notificar que ficou sem água
~~~~MySql
const Formulario = bd.sequelize.define('semAgua' , {

    nomeRua: {
        type: bd.Sequelize.STRING(50)
    },

    nomeBairro: {
        type: bd.Sequelize.STRING(40)
    },

    data: {
        type: bd.Sequelize.DATE
    },
    
    hora: {
        type: bd.Sequelize.TIME
    }
});
~~~~

* Simulação para quitar um talão
~~~~MySql
const Simulador = bd.sequelize.define('simulador' , {

    valorTalao: {
        type: bd.Sequelize.INTEGER
    },

    valorEntrada: {
        type: bd.Sequelize.INTEGER
    },

    parcelamento: {
        type: bd.Sequelize.INTEGER
    }
});
~~~~
