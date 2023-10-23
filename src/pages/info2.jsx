import React from 'react';
import style from '../stylesheets/pag.css';
import NavBar from '../components/nav_bar';
import { Button } from '@mui/material';
import Ensayo from '../assets/Ensayo1.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Recordatorio from '../components/recordatorio';

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <link rel="stylesheet" type="text/css" href={style}></link>

        <div className="two-column-container">
          <div className="left-column">
          
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={Ensayo}
                alt="Charla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h3>Detalles del evento</h3>
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>Fecha: 01/10/2023 </li>
                  <li>Hora: 14:00 - 17:00</li>
                  <li>Ubicación: Sede Valparaiso</li>
                </ul>
                <h3>Organizadores</h3>
                <ul>
                  <li>Charlie Generic</li>
                </ul>
                <h3>Contacto</h3>
                <ul>
                  <li>Nombre de contacto: Charlie Generic</li>
                  <li>Correo electrónico: CharlieGeneric@gmail.com</li>
                  <li>Teléfono: +56969420113</li>
                </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
            
            
            
          </div>
          <div className="right-column">
          <h2>Ensayo presencial Prueba de Acceso a la Educación Superior, PAES</h2>
            <p>La Universidad Técnica Federico Santa María, a través de su Dirección de Admisión invita cordialmente a los familiares y amigos de nuestros profesores, estudiantes y funcionarios, a participar del ensayo presencial de la Prueba de Acceso a la Educación Superior, PAES.</p>
            <p>Esta actividad se realizará en alianza con el Preuniversitario Cpech el sábado 3 de septiembre, desde las 09:00 horas, en la sede de Valparaiso y contemplará las pruebas de Competencia Lectora y Matemática M1.</p>
            <p>Quienes deseen participar deben inscribirse previamente.</p>
            <Recordatorio/>
            
          </div>
        </div>

        <div className="eid">
          <Button variant="contained" href='/calendario'>Volver</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
