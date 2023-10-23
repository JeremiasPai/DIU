import React from 'react';
import style from '../stylesheets/pag.css';
import NavBar from '../components/nav_bar';
import { Button } from '@mui/material';
import Puerta from '../assets/Puertas1.PNG'
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
                image={Puerta}
                alt="Charla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h3>Detalles del evento</h3>
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>Fecha: 02/10/2023 - 03/10/2023 </li>
                  <li>Hora: 14:00 - 18:00</li>
                  <li>Ubicación: Sede Valparaiso</li>
                </ul>
                <h3>Organizadores</h3>
                <ul>
                  <li>Charlie Generic</li>
                </ul>
                <h3>Contacto</h3>
                <ul>
                  <li>Nombre de contacto: USM</li>
                  <li>Correo electrónico: puertasabiertas.usm.cl</li>
                  <li>Teléfono: +56969420113</li>
                </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
            
            
            
          </div>
          <div className="right-column">
          <h2>Participa de Puertas Abiertas USM 2023 y conoce en detalle Ingeniería Civil Industrial</h2>
            <p>Te invitamos a participar de Puertas Abiertas USM 2023 donde podrás resolver tus dudas y consultas en los stands informativos, conocer más sobre la carrera a través de los talleres prácticos, visitas guiadas, charlas y mucho más.</p>
            <p>Se parte de esta experiencia presencial e inmersiva para que sin importar dónde estés podrás participar..</p>
            <p>Inscríbete en puertasabiertas.usm.cl y crea tu avatar en metaverso.usm.cl</p>
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
