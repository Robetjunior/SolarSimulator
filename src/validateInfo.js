export default function validateInfo(values) {
  let errors = {};

  if (!values.typeStructure) {
    errors.typeStructure = 'Tipo de estrutura é necessário';
  }

  if (!values.valorConta) {
    errors.valorConta = 'Valor da conta é necessário';
  } else if (values.valorConta < 1) {
    errors.valorConta = 'Valor da Conta inválido';
  }

  if (!values.cep) {
    errors.cep = 'CEP é necessário';
  } else if (!/^[0-9]{5}-[0-9]{3}$/.test(values.cep)) {
    errors.cep = 'CEP invalido! Ex: 55555-555';
  }

  return errors;
}
