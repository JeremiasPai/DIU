import React from 'react';
import style from '../stylesheets/pag.css';
import NavBar from '../components/nav_bar';
import { Button } from '@mui/material';
import Coloquio from '../assets/Coloquio1.jpg'
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
                image={Coloquio}
                alt="Charla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h3>Detalles del evento</h3>
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>Fecha: 02/10/2023</li>
                  <li>Hora: 15:00 - 17:00</li>
                  <li>Ubicación: Sede Viña del mar</li>
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
          <h2>XIX Coloquios de Microbiología Valparaíso 2022</h2>
            <p>La Universidad Técnica Federico Santa María los invita cordialmente a participar de la XIX versión de los Coloquios de Microbiología Valparaíso 2022, que contará con la participación del Dr. Jean-Baptiste Ramond de la Pontifica Universidad Católica de Chile, con su charla "Un punto de vista microbiano sobre el funcionamiento de las tierras secas".</p>
            <p>Esta actividad se realizará el martes 2 de octubre, a las 15:00 horas.</p>
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
