// Carregando módulos 
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const admin = require("./routes/admin")
const user = require("./routes/user")
const session = require('express-session')
const flash = require('connect-flash')
const moment = require("moment")
const passport = require('passport')
require("./config/auth")(passport)

// Configurações

// sessão 
app.use(session({
    secret: "aguamoveomundo",
    resave: true,
    saveUninitialized: true
}))


app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


// middleware
app.use((req, res, next) => {
    res.locals.sucesso_msg = req.flash("sucesso_msg")
    res.locals.erro_msg = req.flash("erro_msg");
    res.locals.error = req.flash("error");
    res.locals.admin = req.admin || null
    next()
})

// body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY hh:mm:ss ')
        }
    }
}))
app.set('view engine', 'handlebars')

// swagger
swaggerFile = require("./swagger_documentos.json"),
    swaggerUi = require("swagger-ui-express")


//public
app.use(express.static(__dirname + '/public'))

// fim de configurações

// Rotas

//documetação
app.use('/documento', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// rota principal 
app.get('/', (req, res) => {
    res.render('./user/principal')
})

// Grupos com prefixos
// admin
app.use('/admin', admin)
// user
app.use('/user', user)


// Outros

const PORT = 8083
app.listen(PORT, () => {
    console.log("Servidor rodando !!")
})