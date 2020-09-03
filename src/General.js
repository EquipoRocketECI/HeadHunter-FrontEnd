import React from 'react';
import { Login } from './components/Login';
import { SignIn } from './components/SignIn';
import { Publish } from './publishidea/Publish';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import logo from './img/Logoo.png';
import {Sugerencias} from './Sugerencias'
import './General.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Explore } from './components/ExploreComponent/Explore';




export class General extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const LoginView = () => (
            <Login/>
        );

        const SignInView = () => (
            <SignIn/>
        );

        
        const PublishView = () => (
            <Publish/>
        );

        const SugerenciaView = () => (
            <Sugerencias />
        );


        const GeneralView = () => (
            <General/>
        );           
        
        const ExploreView = () => (

            <Explore/>
        );

        return (
            <Router>
                <header className="App-header">
                    <div>
                        <img src={logo} class="logo" />
                    </div>
                    <Typography variant="h1" class="center">HeadHunter</Typography>
                    <Typography variant="h4"class="center">Make your ideas fly</Typography>
                </header>

                <div class="grid-container">
                    <div class="search">
                        <ButtonGroup class="ButtonGroup" variant="contained" aria-label="contained button group">
                            <Button className="blue">
                                Explorar
                            </Button>
                            <Button className="blue">
                                <Link class="link" to="/publish">Publicar</Link>
                            </Button>
                        </ButtonGroup>
                    </div>
               

                    <Paper className="paper" elevation={20}>
                        <div class="login">
                            <Route exact path="/" component={LoginView} />
                            <Route path="/SignIn" component={SignInView} />
                            <Route path="/Sugerencias" component={SugerenciaView} />
                        </div>
                    </Paper>
                    
                    <div class="main">
                        
                    </div>
                </div>

                <div>
                    <Route path="/publish" component={PublishView} />
                    <Route path="/General" component={GeneralView} />
                    <Route path="/explore" render={ExploreView} />

                </div>

                <ul>
                    <li><Link class="link" to="/">Login</Link></li>
                    <li><Link class="link" to="/SignIn">SignIn</Link></li>
                    <li><Link class="link" to="/publish">Publish</Link></li> 
                    <li><Link class="link" to="/Sugerencias">Sugerencias</Link></li> 
                </ul>
            </Router>
        );

    }

}

export default General;