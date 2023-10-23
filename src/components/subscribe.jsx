import React from 'react'
import {TextField, FormGroup, FormControlLabel, Checkbox, Button, Dialog} from '@mui/material'
import PropTypes from 'prop-types'

import NavBar from '../components/nav_bar'
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
                    <h1>Recibir notificaciones de eventos</h1>
                    <p>Puede recibir notificaciones por correo electronico de eventos de su interes que se realicen en la universidad.</p> 
                </center>
                <div className='inner-container'>
                    <h3>Ingrese su correo electronico</h3>
                    <TextField required id="filled-basic" label="Correo Electronico" variant="filled" />
                    <h3>Ingrese los eventos de su interes</h3>
                    <div className='form-group-container-dualcol'>
                        <div className="form-group">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox/>} label="Puertas abiertas" />
                                <FormControlLabel control={<Checkbox/>} label="Ensayos" />
                                <FormControlLabel control={<Checkbox/>} label="Seminarios" />
                                <FormControlLabel control={<Checkbox/>} label="Coloquios" />
                            </FormGroup>
                        </div>
                        <div className="form-group">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox/>} label="Talleres" />
                                <FormControlLabel control={<Checkbox/>} label="Charlas" />
                                <FormControlLabel control={<Checkbox/>} label="Convenciones" />
                            </FormGroup>
                        </div>
                    </div>
                    
                    
                    <h3>Ingrese su(s) modalidad(es) preferidas</h3>
                    <div className='form-group-container-singlecol'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Presencial" />
                            <FormControlLabel control={<Checkbox/>} label="En linea" />
                        </FormGroup>
                    </div>
                    
                </div>
                <div>
                    <Button variant="contained" onClick={handleClose}>Suscribirse</Button>
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

export const SubscribeForm = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant='contained' onClick={handleClickOpen}>Recibir notificaciones</Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            ></SimpleDialog>
        </div>
        
  )
}

export default SubscribeForm