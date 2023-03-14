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
<br/>
  <th> Front-End </th>
 <td>Html</td>
 <td>Css</td>
 

</table>

# StoryBoard
<table> <td><a href = "https://www.figma.com/file/Aeboe8zfAXq3nheiBtrRKn/StoryBoard%2F%2FKau%C3%A3?node-id=0%3A1" > Figma </a> </td> </table>

# Colaboradores
 <table> <td><a href = "https://github.com/Kakau007" > kakau007 </a></td></table>
 
 # Estrutura de Dados
 
 * Criar um novo usuário <br />
      Novo_Usuario = {<br />
     Nome = String,<br />
     E-mail = String,<br />
     Senha = String<br />
  }<br />
 
 * Fazer Login 
      Login = {
    E-mail = String,
    Senha = String
  }
  
  * Formulário para solicitar uma equipe no seu bairro  
      Tempo_Sem_Agua = {
    Tempo = Date,
    Nome_Rua = String,
    Nome_Bairro = String,
    Telefone = int
  }
  
 * Simulação de negociação 
      Simulador = {
   Quantidade_Boletos = Int,
   Valor_Entrada = int,
   Total_Parcelas= int
  };
