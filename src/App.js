import './App.css';
import React, { useState } from 'react';
import { Box, Grid, Typography } from "@mui/material"
import Formulario from './components/Formulario';
import Obrigado from './components/Obrigado';

function App() {


  const [cadastrou, setCadastrou] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      position='relative'
      textAlign="center"
    >
      <Grid container>
        <Grid item md={8}>
          {cadastrou ?
            <Obrigado />
            :
            <>
              <Typography variant="h3">Cadastre-se para ficar sabendo quando os produtos chegarem!</Typography>
              <Formulario setCadastrou={setCadastrou} />
            </>}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
