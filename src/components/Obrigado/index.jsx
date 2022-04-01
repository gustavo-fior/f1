import { Link, Stack, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";

const Obrigado = () => {
  return (
    <>
      <Typography variant="h3">😁</Typography>
      <Typography variant="h3">Obrigado!</Typography>
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        Nos siga no <strong>Instagram</strong> para ficar por dentro das
        novidades...
      </Typography>
      <Stack
        sx={{ marginTop: 2 }}
        direction="row"
        display="flex"
        justifyContent="center"
        spacing={1}
      >
        <InstagramIcon fontSize="large" />
        <Link
          href="https://instagram.com/exemplo"
          underline="hover"
          color="#018076"
        >
          <Typography variant="h5">@exemplo</Typography>
        </Link>
      </Stack>
    </>
  );
};

export default Obrigado;
