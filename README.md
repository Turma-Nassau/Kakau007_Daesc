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
<td> MongoDB </td>
<td>javaScript </td>
<td>Bootstrap</td>
</tr>
<tr>
<td>v18.15.0</td>
<td>v6.0</td>
<td>ECMAScript 2022</td>
<td>V5.3</td>
</tr>

</table>

#### Módulos Utilizados no Node.JS
<table> 
<tr>
<td>Express</td>
<td>Express-Handlebars</td>
<td>Express-session</td>
<td>Connect-flash</td>
<td>Body-Parser</td>
<td>Mongoose</td>
<td>Swagger</td>
<td>Path</td>

</tr>
<tr>
<td>^4.18.2</td>
<td>^7.0.4</td>
<td>^1.17.3</td>
<td>^0.1.1</td>
<td>^1.20.2</td>
<td>^7.0.3</td>
<td>^4.6.2</td>
<td>1.0.0</td>
</tr>

</table>


### Modelo em alta fidelidade
* <a href = "https://www.figma.com/file/Aeboe8zfAXq3nheiBtrRKn/StoryBoard%2F%2FKau%C3%A3?node-id=0%3A1" > Figma </a> 


 ### Estrutura de Dados
 
 * criar um novo usuário 
 ~~~~MongoDB
     const UsuarioSchema = mongoose.Schema({

        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        senha: {
            type: String,
            require: true
        }
    })
~~~~

* Formulário para notificar que ficou sem água
~~~~MongoDB
const ReclamacaoSchema = new mongoose.Schema({

    rua: {
        type: String,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})
~~~~

* Simulação para quitar um talão
~~~~MongoDB
const ServicoSchema = new mongoose.Schema({

    boleto: {
        type: Number,
        require: true
    },
    entrada: {
        type: Number,
        require: true
    },
    parcelamento: {
        type: Number,
        require: true
    }
})
~~~~
