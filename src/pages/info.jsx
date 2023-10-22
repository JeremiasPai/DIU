import React from 'react';
import style from '../stylesheets/pag.css';
import NavBar from '../components/nav_bar';
import { Button } from '@mui/material';
import LogoUSM from '../assets/usm.png'
import Charla from '../assets/Charla1.png'

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <link rel="stylesheet" type="text/css" href={style}></link>
        
        <div class="contenedor-imagen">
          <div class='imgt'>
            <img src={Charla} alt="Descripción de la imagen" height='650px'></img>
            <div class='darker'></div>
          </div> 
          <div class="uppertext"><h2><br/><br/><br/><br/><br/><br/>Exposición «Micromundos, ciencia y arte en tus manos»</h2></div>
        </div>
        <div className="two-column-container">
          <div className="left-column">
          <h3>Descripción</h3>
            <p>La Universidad Técnica federico Santa María a través de su Centro Científico Tecnológico de Valparaíso, CCTVal y en conjunto con el Laboratorio de Nanobiomateriales USM los invita cordialmente a participar de la exposición "Micromundos, ciencia y arte en tus manos".</p>
            <p>Esta muestra, abierta al público, se exhibirá en el Museo de Historia Natural de Valparaíso, MHNV, ubicado en Condell 1546, Valparaíso, hasta el 15 de diciembre de 2023 en los siguientes horarios:</p>
            <ul>
              <li>Martes a viernes: 10:00 a 13:00 horas y 14:00 a 17:45 horas.</li>
              <li>Sábado: 11:00 a 16:00 horas.</li>
            </ul>

          </div>
          <div className="right-column">
            <h3>Detalles del evento</h3>
            <p>Fecha: 20/07/2023 - 15/12/2023</p>
            <p>Hora: 10:00 - 17:45</p>
            <p>Ubicación: Museo de Historia Natural de Valparaíso</p>
            
            <h3>Organizadores</h3>
            <ul>
              <li>Charlie Generic</li>
            </ul>
            <h3>Contacto</h3>
            <p>Nombre de contacto: Charlie Generic</p>
            <p>Correo electrónico: CharlieGeneric@gmail.com</p>
            <p>Teléfono: +56969420113</p>
          </div>
        </div>

        <div className="eid">
          <Button variant="contained">Volver</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
