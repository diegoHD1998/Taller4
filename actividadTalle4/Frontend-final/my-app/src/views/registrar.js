import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2';



const NewUser =({
    setModoregistro  
    
}
) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axios
    .post("http://localhost:5000/api/registrar",data)
    .then(
      (response)=>{
        console.log(response.data);
        
        Swal.fire({
          icon: 'success',
          title: 'Usuario Registrado',
          text: 'El usuario a sido registrado con exito'
        })
      }
    )
    .catch((error)=>{
      console.log(error);
    });
  }


  console.log(errors);
  
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
        Registrar Usuario
        </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
      <Grid item xs={6}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombreUser"
            label="NombreUsuario"
            name="nombreUser"
            type="text"
            autoComplete="off"
            autoFocus
            inputRef={register}
          />
          </Grid>

      <Grid item xs={6}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="apellidoUser"
            label="ApellidoUsuario"
            name="apellidoUser"
            type="text"
            autoComplete="off"
            autoFocus
            inputRef={register}
          />
          </Grid>

      <Grid item xs={12}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="correoUser"
            label="CorreoUsuario"
            name="correoUser"
            type="email"
            autoComplete="off"
            autoFocus
            inputRef={register}
          />
          </Grid>

      <Grid item xs={12}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="passUser"
            label="Contraseña"
            name="passUser"
            type="password"
            autoComplete="off"
            autoFocus
            inputRef={register}
          />
          </Grid>
          
      {/* <input type="submit" /> */}
      </Grid>
      
      <Grid item xs={12} >
          <Button 
          type="submit" 
          fullwidth
          variant="contained" 
          color="primary" 
          size="large">
            Enviar
          </Button>
        </Grid>
    
    </form>
    <br></br>
      <Button 
          onClick={() => setModoregistro(false)}
          variant="contained" 
          color="secondary"
          >
            Cerrar
          </Button>

    </Container>
    </div>

  );
}

export default NewUser; {/* Collapse */}