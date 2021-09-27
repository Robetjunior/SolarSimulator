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
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: 'rgb(255, 179, 39)',
  },
  palette: {
    color: 'green',
    fontWeight: 'bold',
  },
  typography: {
    marginBottom: '1rem',
  },
  table: {
    minWidth: 650,
  },
  tableSpace: {
    marginBottom: '2rem',
  },
  tableContainer: {
    borderRadius: 15,
    padding: '10px',
    marginTop: '1rem',
    boxShadow:
      '0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    paddingTop: '1.25rem',
    backgroundColor: 'rgb(255, 179, 39)',
  },
}));

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
  const classes = useStyles();
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
        <div className={classes.background}>
          <Container maxWidth="lg" className={classes.tableContainer}>
            <Typography variant="h5" className={classes.typography}>
              Potencial:
              <span className={classes.palette}> {clientData.potencial}</span>
            </Typography>

            <Typography variant="h5" className={classes.typography}>
              Valor de Instalação: R$ {clientData.valor_instalacao.toFixed(2)}
            </Typography>

            <Typography variant="h5" className={classes.typography}>
              Economia: R$ {clientData.economia.toFixed(2)}
            </Typography>
            <TableContainer component={Paper} className={classes.tableSpace}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      Parcelas
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Taxa Minina
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Taxa Maxima
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Valor Minimo
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Valor Máximo
                    </TableCell>
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

            <List>
              <ListItem button>
                <ListItemText
                  primary="Irradiancia"
                  secondary={`${clientData.irradiancia} W/m² `}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Irradiancia Minima"
                  secondary={`${clientData.irradiancia_minima} W/m² `}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Irradiancia Maxima"
                  secondary={`${clientData.irradiancia_maxima} W/m² `}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="CO2"
                  secondary={`${clientData.co2.toFixed(2)} `}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Integradores na Região"
                  secondary={`${clientData.integradores_regiao} `}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Minimo de Integradores"
                  secondary={`${clientData.integradores_minimo} `}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Máximo de Integradores"
                  secondary={`${clientData.integradores_maximo} `}
                />
              </ListItem>
            </List>

            <Typography variant="h4">Kit</Typography>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 350 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      Titulo
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Quantidade
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Valor
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Custo
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Descrição
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Datasheet
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clientData.kit.map((kit) => (
                    <TableRow
                      key={kit.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell key={kit.id} scope="row" sortDirection="asc">
                        {kit.titulo}
                      </TableCell>

                      <TableCell scope="row">{kit.qtde}</TableCell>

                      <TableCell scope="row">
                        R${kit.valor.toFixed(2)}
                      </TableCell>

                      <TableCell scope="row">
                        R${kit.custo.toFixed(2)}
                      </TableCell>

                      <TableCell
                        scope="row"
                        dangerouslySetInnerHTML={{ __html: kit.descricao }}
                      ></TableCell>

                      <TableCell scope="row">
                        <a href={kit.datasheet}>Datasheet</a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
      ) : (
        <Container maxWidth="lg" className={classes.tableContainer}>
          <Typography variant="h2">Carregando...</Typography>
        </Container>
      )}
    </>
  );
};

export default FormSuccess;
