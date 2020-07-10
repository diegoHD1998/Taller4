import React,{ useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import MaterialDatatable from "material-datatable";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const [item, setItem] = useState([]);

  const columns = [
    {
     name: "NombreLibro",
     field: "nombreLibro",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Autor",
     field: "autor",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "AñoPublicacion",
      field: "añoPublic",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "Idioma",
      field: "idioma",
      options: {
       filter: true,
       sort: false,
      }
     }
   ];





  const onSubmit = data => {
    axios
    .post("http://localhost:5000/api/libro1",data)
    .then(
      (response)=>{
        console.log(response.data);
        cargar();
      }
    )
    .catch((error)=>{
      console.log(error);
    });
  }

  useEffect(() => {
    cargar();
  }, []);

  const cargar = async() =>{
    const { data } = await axios.get("http://localhost:5000/api/libro2");

    //const { data } = await axios.get("/api/zona/listar");
    console.log(data);
    setItem(data.libro);
    return null;
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

<MaterialDatatable
title={"Libros"}
data={item}
columns={columns}
options={{
  selectableRows: false,
  print: false,
  onlyOneRowCanBeSelected: false,
  textLabels: {
    body: {
      noMatch: "Lo sentimos, no se encuentran registros",
      toolTip: "Sort",
    },
    pagination: {
      next: "Siguiente",
      previous: "Página Anterior",
      rowsPerPage: "Filas por página:",
      displayRows: "de",
    },
  },
  download: false,
  pagination: true,
  rowsPerPage: 5,
  usePaperPlaceholder: true,
  rowsPerPageOptions: [5, 10, 25],
  sortColumnDirection: "desc",
}}

/>
    </div>

  );
}