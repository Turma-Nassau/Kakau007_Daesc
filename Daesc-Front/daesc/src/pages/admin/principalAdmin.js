import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuths';

const AdminArea = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  const handleSignOut = () => {
    signout();
    navigate('/');
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Daesc: Área Administrativa</h2>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="/admin/situacaoReclamacao" className="text-decoration-none">
                <h5 className="card-title">Listagem de áreas sem água</h5>
              </a>
              <p className="card-text">Visualize todas as áreas que ficaram sem água.</p>
            </li>
            <li className="list-group-item">
              <a href="/admin/situacaoSimulacao" className="text-decoration-none">
                <h5 className="card-title">Listagem de simulações de quitação</h5>
              </a>
              <p className="card-text">Visualize todas as tentativas de quitação de dívidas.</p>
            </li>
            <li className="list-group-item">
              <a href="/admin/criarAdmin" className="text-decoration-none">
                <h5 className="card-title">Criar uma nova conta de administrador</h5>
              </a>
              <p className="card-text">Crie contas somente para funcionários de confiança.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end mt-4">
        <button className="btn btn-primary" onClick={handleSignOut}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default AdminArea;
