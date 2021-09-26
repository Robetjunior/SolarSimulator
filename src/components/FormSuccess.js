import React, { useState, useEffect } from 'react';
import '../Form.css';

import { Container, Typography } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function createData(
  parcelas,
  taxa_minina,
  taxa_maxima,
  valor_minimo,
  valor_maximo
) {
  return { parcelas, taxa_minina, taxa_maxima, valor_minimo, valor_maximo };
}

const FormSuccess = ({ clientData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (clientData.status === 'dados localizados') {
      setIsLoading(false);
      clientData.parcelamento.map((parcelamento) => {
        createData(parcelamento.parcelas);
        createData(parcelamento.taxa_minina);
        createData(parcelamento.taxa_maxima);
        createData(parcelamento.valor_minimo);
        createData(parcelamento.valor_maximo);
      });
    }
  }, [clientData]);

  return (
    <>
      {!isLoading ? (
        <>
          <Container maxWidth="md">
            <p>Economia: {clientData.economia}</p>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 350 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Parcelas</TableCell>
                    <TableCell>Taxa Minina</TableCell>
                    <TableCell>Taxa Maxima</TableCell>
                    <TableCell>Valor Minimo</TableCell>
                    <TableCell>Valor MAximo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clientData.parcelamento.map((parcelamento, id) => (
                    <TableRow
                      key={id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {parcelamento.parcelas}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        R${parcelamento.taxa_minina.toFixed(2)}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        R${parcelamento.taxa_maxima.toFixed(2)}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        R${parcelamento.valor_minimo.toFixed(2)}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        R${parcelamento.valor_maximo.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="form-content-right"></div>
          </Container>
        </>
      ) : (
        <Container maxWidth="md">
          <Typography variant="h2">Carregando...</Typography>
        </Container>
      )}
    </>
  );
};

export default FormSuccess;
