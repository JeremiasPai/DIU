import React from 'react';
import style from '../stylesheets/pag.css';
import NavBar from '../components/nav_bar';
import { Button } from '@mui/material';
import Seminario from '../assets/Seminario1.png'
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
                image={Seminario}
                alt="Charla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h3>Detalles del evento</h3>
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>Fecha: 02/10/2023 - 03/10/2023 </li>
                  <li>Hora: 11:30 - 21:20</li>
                  <li>Ubicación: Sede San Joaquin</li>
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
          <h2>VI Seminario Internacional de Ciberseguridad «El espacio virtual: tendencias, retos y oportunidades»</h2>
            <p>La Universidad Técnica Federico Santa María, a través de su Departamento de Informática, junto a la Policía de Investigaciones de Chile, los invita cordialmente a participar del VI Seminario Internacional de Ciberseguridad "El espacio virtual: tendencias, retos y oportunidades", instancia que reunirá a destacados expertos en la materia.</p>
            <p>Esta actividad se realizará el martes 2 y miércoles 3 de octubre, de 11:30 a 21:20 horas, en la sede de San Joaquin.</p>
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
