import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RoueterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Crear Cuenta">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Sergio Pita"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="gmail"
                placeholder="correo@gogle.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseaña"
                type="password"
                placeholder="Contraseaña"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Crear una cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr:1 }}>¿Ya tienes cuenta ? </Typography>
              <Link component={RoueterLink} color="inherit" to="/auth/login">
                ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
