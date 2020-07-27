import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axios
    .post("http://localhost:5000/api/libro1",data)
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
      <input type="text" placeholder="nombreLibro" name="nombreLibro" ref={register} />
      <input type="text" placeholder="autor" name="autor" ref={register} />
      <input type="text" placeholder="añoPublic" name="añoPublic" ref={register} />
      <input type="text" placeholder="idioma" name="idioma" ref={register} />

      <input type="submit" />
    </form>


    </div>

  );
}