import './App.css';
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { cadastrarUsuario } from './API/api';

function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

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
          <Typography variant="h3">Cadastre-se para ficar sabendo quando os produtos chegarem!</Typography>
          <form onSubmit={event => {
            event.preventDefault();
            cadastrarUsuario(email, nome);
          }}>
            <Grid sx={{ width: 700, marginLeft: 25, marginTop: 3 }} container spacing={2}>
              <Grid item md={8}>
                <TextField onChange={event => { setEmail(event.target.value) }} fullWidth placeholder='E-mail' variant='standard' type="email" required />
              </Grid>
              <Grid item md={4}>
                <TextField onChange={event => { setNome(event.target.value) }} fullWidth placeholder='Nome (opcional)' variant='standard' type="nome" />
              </Grid>
            </Grid>
            <Button sx={{ marginTop: 5, backgroundColor: "#018076" }} variant="contained" color='info' size='large' type="submit">Cadastrar</Button>
            <Typography sx={{ marginTop: 2 }}>Não vamos mandar <strong>nenhum</strong> tipo de spam, pode ficar tranquilo(a) :)</Typography>

          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
