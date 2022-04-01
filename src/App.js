import './App.css';
import React, { useState } from 'react';
import { Box, Grid } from "@mui/material"
import Formulario from './components/Formulario';
import Obrigado from './components/Obrigado';
import styled from '@emotion/styled';

function App() {
  const [cadastrou, setCadastrou] = useState(false);

  const Wrapper = styled.main`

    height: 100vh;
    width: 100vw;
`;

  return (
    <Wrapper>
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
              <Formulario setCadastrou={setCadastrou} />}
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}

export default App;
