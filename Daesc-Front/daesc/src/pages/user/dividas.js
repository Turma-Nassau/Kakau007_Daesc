import React, { useState } from "react";
import axios from "axios";
import { NumericFormat } from 'react-number-format';

const NovaSimulacao = () => {
  const [boleto, setBoleto] = useState("");
  const [entrada, setEntrada] = useState("");
  const [parcela, setParcela] = useState("");
  const [erros, setErros] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!boleto || !entrada || !parcela) {
      setErros([{ texto: "Por favor, preencha todos os campos.", type: "error" }]);
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:8083/user/servico/novo", {
        boleto,
        entrada,
        parcela,
      });

      // Limpar os campos do formulário
      setBoleto("");
      setEntrada("");
      setParcela("");
      setErros([{ texto: "Simulação criada com sucesso!", type: "success" }]);
    } catch (error) {
      console.error(error);
      // Lógica de manipulação do erro, se necessário
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderParcelaOptions = () => {
    const maxParcelas = Math.floor(boleto / entrada);
    const options = [];

    for (let i = 1; i <= maxParcelas; i++) {
      options.push(
        <option key={i} value={i}>
          {i} parcela{`${i > 1 ? "s" : ""}`}
        </option>
      );
    }

    return options;
  };

  return (
    <div>
      {erros.length > 0 ? (
        <div>
          {erros.map((erro, index) => (
            <div
              key={index}
              className={`alert ${erro.type === "success" ? "alert-success" : "alert-danger"}`}
              role="alert"
            >
              {erro.texto}
            </div>
          ))}
        </div>
      ) : null}
      <h3>Nova simulação</h3>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="boleto">Boleto:</label>
            <NumericFormat
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$"
              decimalScale={2}
              fixedDecimalScale={true}
              allowNegative={false}
              placeholder="Valor do boleto"
              className="form-control"
              value={boleto}
              onValueChange={(values) => setBoleto(values.floatValue)}
            />
            <label htmlFor="entrada">Entrada:</label>
            <NumericFormat
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$"
              decimalScale={2}
              fixedDecimalScale={true}
              allowNegative={false}
              placeholder="Valor da entrada"
              className="form-control"
              value={entrada}
              onValueChange={(values) => setEntrada(values.floatValue)}
            />
            <label htmlFor="parcela">Número de parcelas:</label>
            <select
              name="parcela"
              id="parcela"
              className="form-control"
              value={parcela}
              onChange={(event) => setParcela(event.target.value)}
            >
              <option value="">Selecione</option>
              {renderParcelaOptions()}
            </select>
            <button type="submit" className="btn btn-success mt-4" disabled={isSubmitting}>
              {isSubmitting ? "Aguarde..." : "Criar simulação"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NovaSimulacao;
