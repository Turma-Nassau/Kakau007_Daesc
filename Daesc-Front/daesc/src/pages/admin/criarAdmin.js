import React, { useState } from 'react';

import useAuth from '../../hooks/useAuths';

const CriarAdmin = () => {
    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [senha, setSenha] = useState('');
    const [flashMessages, setFlashMessages] = useState([]);


    const { signup } = useAuth();

    const handleCadastrar = () => {
        if (!email || !emailConf || !senha) {
            setFlashMessages([{ text: 'Por favor, preencha todos os campos.', type: 'error' }]);
            return;
        } else if (email !== emailConf) {
            setFlashMessages([{ text: 'Os e-mails não são iguais.', type: 'error' }]);
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setFlashMessages([{ text: res, type: 'error' }]);
            return;
        }

        setFlashMessages([{ text: 'Admin cadastrado com sucesso!', type: 'success' }]);
        setEmail('');
        setEmailConf('');
        setSenha('');
    };

    return (
        <div>
            {flashMessages.length > 0 ? (
        <div>
          {flashMessages.map((message, index) => (
            <div
              key={index}
              className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"}`}
              role="alert"
            >
              {message.text}
            </div>
          ))}
        </div>
      ) : null}
            <h3>Criar uma nova conta administrativa</h3>
            <div className="card">
                <div className="card-body">
                   
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name="nome" id="nome" placeholder="Digite seu nome" className="form-control" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sobrenome">Sobrenome:</label>
                            <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite seu sobrenome" className="form-control" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                className="form-control"
                                value={email}
                                onChange={(e) => [setEmail(e.target.value), setFlashMessages([])]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Confirme seu e-mail:</label>
                            <input
                                type="email"
                                name="emailConf"
                                id="emailConf"
                                placeholder="Confirme seu e-mail"
                                className="form-control"
                                value={emailConf}
                                onChange={(e) => [setEmailConf(e.target.value), setFlashMessages([])]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder="Crie uma senha"
                                className="form-control"
                                value={senha}
                                onChange={(e) => [setSenha(e.target.value), setFlashMessages([])]}
                            />
                        </div>

                        <button type="button" className="btn btn-success mt-4" onClick={handleCadastrar}>
                            Criar Conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CriarAdmin;
