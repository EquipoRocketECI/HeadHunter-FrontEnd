import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import Link from "@material-ui/core/Link";




export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", recordar: false };
        localStorage.setItem('username', "Mateo");
        localStorage.setItem('password', "IETI1234");
        localStorage.setItem('recordar', false);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
       
        return (
                <div>
                    <Typography variant="h4">Iniciar Sesión</Typography>
                    <form className="form">

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Nombre de usuario</InputLabel>
                            <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleUsername} selected={this.state.userName} />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Contraseña</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handlePassword}
                                selected={this.state.password}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="blue"
                            onClick={this.handleSubmit}>
                            Ingresar
                        </Button>

                        <br />
                        <br />                              
                                
                        <div>
                            <Link href="SignIn" variant="body2">Registrar</Link>
                        </div>
                    </form>
                </div> 
        );
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleSubmit(e) {  
        localStorage.setItem("recordar", true);   
    }

    handleClick(e){
        localStorage.setItem("recordar", true)
    }
}