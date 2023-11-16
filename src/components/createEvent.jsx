import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

const createEvent = ({ open, onClose, onAddEvent, newEvent, handleInputChange }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Agregar Nuevo Evento</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Nombre"
            name="nombre"
            value={newEvent.nombre}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Hora"
            name="hora"
            value={newEvent.hora}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sede"
            name="sede"
            value={newEvent.sede}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Más Información"
            name="masInformacion"
            value={newEvent.masInformacion}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onAddEvent} color="primary">
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default createEvent;
