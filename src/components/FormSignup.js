import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../Form.css';
import {
  Container,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    marginTop: '1rem',
    height: 48,
    padding: '0 30px',
  },
  formH1: {
    color: 'rgb(255, 179, 39)',
    textAlign: 'center',
    paddingTop: '3rem',
  },
});

const FormSignup = ({ submitForm, addNote }) => {
  const classes = useStyles();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <Container className="form-content-right">
      <Typography variant="h2" className={classes.formH1}>
        Simulador Solar
      </Typography>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label" id="typeStructure">
            Tipo de Estrutura
          </label>
          <Select
            className="form-input"
            name="typeStructure"
            id="typeStructure"
            onChange={handleChange}
            value={values.typeStructure}
            labelId="typeStructure"
          >
            <MenuItem value="">Escolha um tipo de estrutura</MenuItem>
            <MenuItem value={'fibrocimento-madeira'}>
              Fibrocimento Madeira
            </MenuItem>
            <MenuItem value={'fibrocimento-metalico'}>
              Fibrocimento Metalico
            </MenuItem>
            <MenuItem value={'ceramico'}>Ceramico</MenuItem>
            <MenuItem value={'metalico'}>Metalico</MenuItem>
            <MenuItem value={'laje'}>Laje</MenuItem>
            <MenuItem value={'solo'}>Solo</MenuItem>
          </Select>

          {errors.typeStructure && <p>{errors.typeStructure}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" id="valorConta">
            Valor da Conta
          </label>
          <TextField
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
          <TextField
            className="form-input"
            type="text"
            name="cep"
            placeholder="Digite o CEP"
            value={values.cep}
            onChange={handleChange}
          />
          {errors.cep && <p>{errors.cep}</p>}
        </div>

        <Button
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          className={classes.root}
        >
          Simular Teste
        </Button>
      </form>
    </Container>
  );
};

export default FormSignup;
