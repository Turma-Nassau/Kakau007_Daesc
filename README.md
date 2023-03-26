# Objetivo
* Criar um site onde seja póssivel comunicar a empresa de água da cidade (Daesc), que em determinada região ficou sem água.

# Funcionalidades 
* O web-site tem o intuito de deixar a comunicação com um orgão público da cidade mais fácil. Além de ter a possibilidade do usuário fazer uma simulação de negóciação para quitar suas dívidas atrasadas. Para realizar essa comunicação, será necessário preencher um formulário que vai se encontrar em uma das abas do web-site. Após preencher o formulário, a mensagem será enviada via e-mail para um funcionário responsavél pela manutenção das bombas.

# Tecnologias Utilizadas

 <table>
   <th> Back-End </th>
  <td> Node.JS </td>
  <td> MySql </td>
  <td> javaScript </td>

  <th> Front-End </th>
 <td>Html</td>
 <td>Css</td>
</table> 


# StoryBoard
<table> <td><a href = "https://www.figma.com/file/Aeboe8zfAXq3nheiBtrRKn/StoryBoard%2F%2FKau%C3%A3?node-id=0%3A1" > Figma </a> </td> </table>

# Colaboradores
 <table> <td><a href = "https://github.com/Kakau007" > kakau007 </a></td></table>
 
 # Estrutura de Dados
 
 * Possibilidade de fazer login e criar um novo usuário <br/> <br/>
 
     const Usuario = sequelize.define('usuarios',{ <br/>
    nome: { <br/>
        type: Sequelize.STRING(30) <br/>
    },<br/>
    sobrenome: {<br/>
        type: Sequelize.STRING(30)<br/>
    },<br/>
    idade:{<br/>
        type: Sequelize.INTEGER(2)<br/>
    },<br/>
    email: {<br/>
        type: Sequelize.STRING(50)<br/>
    },<br/>
    senha: {<br/>
       type: Sequelize.STRING(30)<br/>
    }<br/>
});
