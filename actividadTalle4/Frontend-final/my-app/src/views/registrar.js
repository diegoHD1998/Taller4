import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function App() {
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
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="nombreUser" name="nombreUser" ref={register} />
      <input type="text" placeholder="apellidoUser" name="apellidoUser" ref={register} />
      <input type="text" placeholder="correoUser" name="correoUser" ref={register} />
      <input type="text" placeholder="passUser" name="passUser" ref={register} />

      <input type="submit" />
    </form>


    </div>

  );
}