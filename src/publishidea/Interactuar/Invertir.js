﻿import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Calificacion';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export class Invertir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sugerencia: '',
            monto: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
    }

    handleChange(event) {
        this.setState({ sugerencia: event.target.value });
    }

    handleChangeMonto(event) {
        this.setState({ monto: event.target.value });
    }

    render() {
        return (
            <form className="form">

                <Typography variant="h5" >Invertir</Typography>

                <FormControl margin="normal" required fullWidth>
                    <Typography variant="h6" >¿Desea invertir en el proyecto y ser parte de él?</Typography>

                    <br></br>
                    <TextField
                        id="sugerencia"
                        label="Comentario"
                        multiline
                        rows={5}
                        cols={10}
                        value={this.state.sugerencia}
                        onChange={this.handleChange}
                        variant="outlined"
                    />
                    
                    <br></br>
                    <Typography variant="h6" >Calificación</Typography>
                    <p class="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5" ></input>
                        <label for="radio1">1</label>
                        <input id="radio2" type="radio" name="estrellas" value="4"></input>
                            <label for="radio2">2</label>
                        <input id="radio3" type="radio" name="estrellas" value="3"></input>
                            <label for="radio3">3</label>
                        <input id="radio4" type="radio" name="estrellas" value="2"></input>
                            <label for="radio4">4</label>
                        <input id="radio5" type="radio" name="estrellas" value="1"></input>
                            <label for="radio5">5</label>
                     </p>

                     <FormControl>
                        <InputLabel >Monto</InputLabel>
                            <Select labelId="monto" 
                                    id="monto" 
                                    value={this.state.monto}
                                    onChange={this.handleChangeMonto}
                                >
                                <MenuItem value={100000}>100.000</MenuItem>
                                <MenuItem value={200000}>200.000</MenuItem>
                                <MenuItem value={300000}>300.000</MenuItem>
                                <MenuItem value={400000}>400.000</MenuItem>
                                <MenuItem value={500000}>500.000</MenuItem>
                            </Select>
                    </FormControl>

                     <br></br>
                    <Button
                        type="submit"
                        size = "small"
                        variant="contained"
                        className="blue"
                        onClick={this.handleChange}>
                        Enviar
                    </Button>

                </FormControl>

            </form>
            
        );
    }
    
}