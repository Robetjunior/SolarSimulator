import React, { useState, useEffect } from 'react';
import '../Form.css';

const FormSuccess = ({ clientData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (clientData.status === 'dados localizados') {
      setIsLoading(false);
    }
  }, [clientData]);

  return (
    <>
      {!isLoading ? (
        <>
          <div className="form-content-left">
            <p>Economia: {clientData.economia}</p>
            {clientData.parcelamento.map((parcelamento, id) => {
              return (
                <div key={id}>
                  <p>Parcelas: {parcelamento.parcelas}</p>
                  <p>Taxa Minina: {parcelamento.taxa_minina}</p>
                  <p>Taxa Maxima: {parcelamento.taxa_maxima}</p>
                  <p>Valor Minimo: {parcelamento.valor_minimo}</p>
                  <p>Valor MAximo: {parcelamento.valor_maximo}</p>
                </div>
              );
            })}
          </div>
          <div className="form-content-right"></div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default FormSuccess;
