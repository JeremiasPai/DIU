import React from 'react'
import {TextField, FormGroup, FormControlLabel, Checkbox, Button, Dialog} from '@mui/material'
import PropTypes from 'prop-types'
import '../stylesheets/page/subscribe.scss'

export function SimpleDialog(props) {
    const { onClose, open } = props;
  
    const handleClose = () => {
      onClose();
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
            <div>
            <div className='container'>
                <center>
                    <h1>Recordatorio</h1>
                    <p>Puedes recibir un correo como recordatorio</p> 
                </center>
                <div className='inner-container'>
                    <h3>Ingrese su correo electronico</h3>
                    <TextField required id="filled-basic" label="Correo Electronico" variant="filled" />
                    
                </div>
                <div>
                    <Button variant="contained" onClick={handleClose}>Enviar</Button>
                </div>
        </div>
        </div>
      </Dialog>
    );
  }
SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

export const recordatorio = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant='contained' onClick={handleClickOpen}>Avisame</Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            ></SimpleDialog>
        </div>
        
  )
}

export default recordatorio