import styled from "@emotion/styled";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { cadastrarUsuario } from "../../API/api";

const BotaoVerde = styled(Button)`
  margin-top: 2rem;
  background-color: #018076;
  width: 150px;
`;

const Formulario = ({ setCadastrou }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        cadastrarUsuario(email, nome).then(() => {
          setCadastrou(true);
        });
      }}
    >
      <Box display="flex" justifyContent="center">
        <Grid sx={{ width: 700, marginTop: 3 }} container spacing={2}>
          <Grid item md={8}>
            <TextField
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              fullWidth
              placeholder="E-mail *"
              variant="standard"
              type="email"
              required
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              onChange={(event) => {
                setNome(event.target.value);
              }}
              fullWidth
              placeholder="Nome (opcional)"
              variant="standard"
              type="nome"
            />
          </Grid>
        </Grid>
      </Box>
      <BotaoVerde variant="contained" type="submit">Cadastrar</BotaoVerde>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Não vamos mandar <strong>nenhum</strong> tipo de spam, pode ficar
        tranquilo(a) :)
      </Typography>
    </form>
  );
};

export default Formulario;
