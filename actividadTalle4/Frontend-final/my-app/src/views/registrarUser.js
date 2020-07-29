import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
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
import { useForm } from 'react-hook-form';
import axios from 'axios';





const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axios
    .post("http://localhost:5000/api/registrar",data)
    .then(
      (response)=>{
        console.log(response.data);
        /* cargar(); */
      }
    )
    .catch((error)=>{
      console.log(error);
    });
  }


console.log(errors);


const newUser =({
    setModoregistro,
    titulo
}
) => {


    


return (
    <div>
        <h1>{titulo}</h1>
        <h1>AQUI VA EL FORMULARIO DE REGISTRO DE USUARIO</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="nombreUser" name="nombreUser" ref={register} />
        <input type="text" placeholder="apellidoUser" name="apellidoUser" ref={register} />
        <input type="text" placeholder="correoUser" name="correoUser" ref={register} />
        <input type="text" placeholder="passUser" name="passUser" ref={register} />

        <input type="submit" />
    </form>

        <button onClick={() => setModoregistro(false)}>
        CERRAR
      </button>
    </div>


 
)


}

export default newUser;