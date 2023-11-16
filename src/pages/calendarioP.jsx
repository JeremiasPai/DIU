import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { Container, Row, Col } from 'react-bootstrap';
import '../stylesheets/page/calendario.css';
import Button from '@mui/material/Button';
import CreateEvent from '../components/createEvent';


const CalendarP = () => {
  const daysInMonth = [...Array(31).keys()]; // Suponiendo un mes de 31 días

  // Estado para seguir el valor del botón seleccionado (dia)
  const [selectedDay, setSelectedDay] = useState(null);

  // Estado para seguir el botón seleccionado en el calendario
  const [selectedButton, setSelectedButton] = useState(null);

  // Estado para seguir el valor del botón seleccionado (sedes)
  const [selectedSede, setSelectedSede] = useState("Todas");

  // Estado para seguir el valor del botón seleccionado (nombres)
  const [selectedNombre, setSelectedNombre] = useState("Todos");

  // Estructura de datos que asocia cada día con su lista de eventos
  const [eventLists, setEventLists] = useState({
    1: [
      {
        nombre: 'Charla',
        hora: '10:00 AM',
        sede: 'Valparaíso',
        masInformacion: '/info1',
      },
      {
        nombre: 'Ensayo PAES',
        hora: '2:00 PM',
        sede: 'Valparaíso',
        masInformacion: '/info2',
      },
    ],
    2: [
      {
        nombre: 'Seminario',
        hora: '11:30 AM',
        sede: 'San Joaquín',
        masInformacion: '/info3',
      },
      {
        nombre: 'Puertas Abiertas',
        hora: '2:00 PM',
        sede: 'Valparaíso',
        masInformacion: '/info4',
      },
      {
        nombre: 'Coloquios',
        hora: '3:00 PM',
        sede: 'Viña del Mar',
        masInformacion: '/info5',
      },
    ],
    3: [
      {
        nombre: 'Talleres',
        hora: '3:00 PM',
        sede: 'Viña del Mar',
        masInformacion: '/info1',
      },
      {
        nombre: 'Convenciones',
        hora: '3:00 PM',
        sede: 'Vitacura',
        masInformacion: '/info1',
      },
    ],
    // Define más días y listas de eventos según tus necesidades
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({
    nombre: '',
    hora: '',
    sede: '',
    masInformacion: '',
  });


  console.log(eventLists);


  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    const updatedEventLists = { ...eventLists };
    if (selectedDay !== null) {
      if (!updatedEventLists[selectedDay]) {
        updatedEventLists[selectedDay] = [];
      }
      updatedEventLists[selectedDay].push(newEvent);
    }
    setEventLists(updatedEventLists);
    handleCloseDialog();
  };

  // Función para manejar el clic en un botón del calendario
  const handleDayClick = (day) => {
    // Si el mismo botón se presiona nuevamente, desmárcalo
    setSelectedDay(selectedDay === day ? null : day);
    setSelectedButton(selectedDay === day ? null : day);
  };

  // Genera una fila de elementos en función del valor del botón seleccionado
  const generateContent = () => {
    if (selectedDay !== null) {
      let filteredEvents = eventLists[selectedDay] || [];
  
      if (selectedSede !== "Todas") {
        filteredEvents = filteredEvents.filter((event) => event.sede === selectedSede);
      }
  
      if (selectedNombre !== "Todos") {
        filteredEvents = filteredEvents.filter((event) => event.nombre === selectedNombre);
      }
  
      return filteredEvents;
    }
    return null;
  };
  //<h1 className="page__title">Tracker de eventos</h1>
  return (
    <div>
      <NavBar />
      <div className="page">
        
        
        <div className="ms-5">
          <h1 className="ms-3">Calendario USM</h1>
        </div>
      </div>

      <Row>
        <Col>
          <div className='div-calendario'>
            <Container className="custom-cont">
              <h2 className="text-center me-5">Octubre 2023</h2>
              <Row className="custom-row">
                {daysInMonth.map(day => (
                  <Col key={day} md={2} className="custom-col">
                    <div className="calendar-day">
                      <button
                        className={`btn btn-primary btn-block custom-button ${
                          selectedButton === day + 1 ? "selected" : ""
                        }`}
                        onClick={() => handleDayClick(day + 1)}
                      >
                        <span className="custom-text">
                          {day + 1}
                        </span>
                      </button>
                      {/* Agrega eventos o detalles aquí si es necesario */}
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </Col>

        <Col>
        <div className="content-column">
            <div className="search-bar" >
              <select value={selectedSede} onChange={(e) => setSelectedSede(e.target.value)}>
                <option value="Todas">Todas</option>
                <option value="Valparaíso">Sede Valparaíso</option>
                <option value="Viña del Mar">Sede Viña del Mar</option>
                <option value="San Joaquín">Sede San Joaquín</option>
                <option value="Vitacura">Sede Vitacura</option>
              </select>
              <button onClick={() => setSelectedSede("Todas")}>Limpiar</button>

              <select value={selectedNombre} onChange={(e) => setSelectedNombre(e.target.value)}>
                <option value="Todos">Todos</option>
                {daysInMonth.flatMap(day => (eventLists[day + 1] || []).map(event => event.nombre)).filter((value, index, self) => self.indexOf(value) === index).map((nombre, index) => (
                  <option key={index} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
              <button onClick={() => setSelectedNombre("Todos")}>Limpiar</button>
            </div>

            <br></br>

            {selectedDay !== null && (
              <ul>
                {generateContent().map((event, index) => (
                  <li key={index} className="event-item">
                    <div className="row">
                      <div className="col-md-1">
                        <div className="event-day">
                          <div className="blue-box">
                            <span className="day-number">{selectedDay}</span>
                            <span className="oct-text">oct</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <strong>Nombre:</strong> {event.nombre}<br />
                        <strong>Hora:</strong> {event.hora}<br />
                        <strong>Sede:</strong> {event.sede}<br />
                        <a href={event.masInformacion} target="_blank" rel="noopener noreferrer">
                          Más Información
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
                <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                  Agregar Evento
                </Button>

                <CreateEvent
                  open={openDialog}
                  onClose={handleCloseDialog}
                  onAddEvent={handleAddEvent}
                  newEvent={newEvent}
                  handleInputChange={handleInputChange}
                />        
                </ul>
            )}
          </div>
          
        </Col>
      </Row>
    </div>
  );
}

export default CalendarP;