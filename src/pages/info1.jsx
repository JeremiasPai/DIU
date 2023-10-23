import React from 'react';
import style from '../stylesheets/pag.css';
import NavBar from '../components/nav_bar';
import { Button } from '@mui/material';
import Charla from '../assets/Charla1.jpg'
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
                image={Charla}
                alt="Charla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h3>Detalles del evento</h3>
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>Fecha: 01/10/2023 - 15/12/2023</li>
                  <li>Hora: 10:00 - 17:45</li>
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
          <h2>Exposición «Micromundos, ciencia y arte en tus manos»</h2>
            <p>La Universidad Técnica Federico Santa María, a través del Departamento de Arquitectura, los invita cordialmente a participar del ciclo de charlas "Mujeres y la arquitectura". Campus San Joaquín.</p>
            <p>Esta actividad se realizará desde el jueves 31 de agosto al lunes 6 de noviembre, en el Aula Magna del Campus San Joaquín, en los siguientes horarios:</p>
            <ul>
              <li>12 octubre | 12:15 horas: Gabriela García de Cortázar
                  <br/> "Myriam Ratinoff, una arquitecta de vanguardia. La casa Kohn Ratinoff (1962)</li>
                  <br/>
              <li>19 octubre | 12:15 horas: Paula Velasco
                  <br/> "Hacer y re-hacer"</li>
                  <br/>
              <li>6 noviembre | 12:15 horas: Alejandra Celedón
                  <br/> "Microcosmos"</li>
            </ul>
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
