import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../Form.css';

const FormSignup = ({ submitForm, addNote }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label" id="typeStructure">
            Tipo de Estrutura
          </label>
          <select
            className="form-input"
            name="typeStructure"
            id="typeStructure"
            onChange={handleChange}
            value={values.typeStructure}
          >
            <option value="">Escolha um tipo de estrutura</option>
            <option value="fibrocimento-madeira">Fibrocimento Madeira</option>
            <option value="fibrocimento-metalico">Fibrocimento Metalico</option>
            <option value="ceramico">Ceramico</option>
            <option value="metalico">Metalico</option>
            <option value="laje">Laje</option>
            <option value="solo">Solo</option>
          </select>

          {errors.typeStructure && <p>{errors.typeStructure}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" id="valorConta">
            Valor da Conta
          </label>
          <input
            id="valorConta"
            className="form-input"
            type="number"
            name="valorConta"
            placeholder="100"
            value={values.valorConta}
            onChange={handleChange}
          />
          {errors.valorConta && <p>{errors.valorConta}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">CEP</label>
          <input
            className="form-input"
            type="text"
            name="cep"
            placeholder="Digite o CEP"
            value={values.cep}
            onChange={handleChange}
          />
          {errors.cep && <p>{errors.cep}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Simular Teste
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
