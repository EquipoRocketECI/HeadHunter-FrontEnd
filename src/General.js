import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Login } from './components/Login';
import { Payments } from './components/publishidea/Interactuar/Pago/Payments';
import { Logueado } from './components/Logueado';
import { SignIn } from './components/SignIn';
import { Publish } from './components/publishidea/Publish';
import { Idea } from './components/publishidea/Idea';
import { Editar } from './components/publishidea/Editar/Editar';
import { Perfil } from './components/Perfil/Perfil';
import { EditarPerfil } from './components/Perfil/EditarPerfil';

import { Button, Paper, Typography } from '@material-ui/core';

import logo from './img/Logoo.png';
import './General.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { Explore } from './components/ExploreComponent/Explore';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import { Filters } from './components/FiltersComponent/Filters';
import { IdeasDestacadas } from './components/destacadas/IdeasDestacadas';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {

    const exploreRef = useRef(null);

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const [currentLoginView, setCurrentLoginView] = React.useState(localStorage.getItem('currentLoginView'));

    const [ideas, setIdeas] = React.useState([
        {
            "comentario": "Cambien el color de producto",
            "usuario": "Jose15.com",
            "calificacion": 4
        }
    ]);

    //---------------------------------------------------------------------------------------
    // SERVICE ACCESS
    //---------------------------------------------------------------------------------------

    //maybe move this to explore???
    const getSelectedFilters = (selectedFilters) => {
        fetch('https://mysterious-refuge-36454.herokuapp.com/ideas/filtered', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedFilters),

        })
            .then(response => response.json())
            .then(data => {
                const size = 10;
                var items = [];
                for (var i = 0; i < data.length; i += size)
                    items.push(data.slice(i, i + size));

                if (exploreRef.current != null) {
                    if (items.length === 0)
                        items.push([]);
                    exploreRef.current.loadItems(items);
                }

            });
    }

    const searchByTitle = (title) => {
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    const searchByInvestmentRange = (lowRange, highRange) => {
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    const searchByInvestor = (investorName) => {
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    //---------------------------------------------------------------------------------------
    // HANDLERS
    //---------------------------------------------------------------------------------------

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const LoginView = () => (
        <div>
            <Login />
            <Button className="sing"
                onClick={() => { setCurrentLoginView("SignIn") }}>
                Registrarse
            </Button>
        </div>
    );

    const SignInView = () => (
        <div>
            <SignIn />
            <Button className="sing"
                onClick={() => { setCurrentLoginView("Login") }}>
                Iniciar Sesion
            </Button>
        </div>
    );

    const LogueadoView = () => (
        <div>
            <Logueado />
            <Button className="sing"
                onClick={() => { setCurrentLoginView("Login") }}>
            </Button>
        </div>
    );

    const PaymentView = () => (
        <Payments />
    );
    const PublishView = () => (
        <Publish />
    );

    const ExploreView = () => (
        <Explore ref={exploreRef} />
    );

    const FilterView = () => (
        <Filters getSelectedFilters={getSelectedFilters} />
    );

    const IdeaView = () => (
        <Idea />
    );

    const EditarView = () => (
        <Editar />
    );

    const GeneralView = () => (
        <IdeasDestacadas />
    );

    const PerfilView = () => (
        <Perfil />
    );

    const EditarPerfilView = () => (
        <EditarPerfil />
    );


    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Menú
                        </Typography>

                        <header className="App-header">
                            <div>
                                <a href="/"><img src={logo} class="logo" className="logoo" /></a>
                            </div>
                        </header>

                        <header className="App-header-c">
                            <div>
                                <Typography variant="h2" class="center" className="withe">HeadHunter</Typography>
                            </div>
                        </header>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>

                    </div>

                    <Divider /><Divider />

                    <List>


                        <Divider /><Divider />

                        <Button className="blue" href="/explore" variant="contained" color="primary" fullWidth>
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                                Explorar
                        </Button>


                        <Button className="blue" href="/publish" variant="contained" color="primary" fullWidth>
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                                Publicar
                        </Button>

                        {FilterView()}
                    </List>
                </Drawer>

                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <div className="grid-container">


                        <div className="login"> {
                            localStorage.getItem('logout') === 'si' ?
                                LogueadoView() :
                                currentLoginView === "Login" ?
                                    LoginView() :
                                    SignInView()

                        }

                        </div>

                        <div className="main">
                            <Route path="/publish" component={PublishView} />
                            <Route path="/explore" component={ExploreView} />
                            <Route path="/payment" component={PaymentView} />
                            <Route path="/idea" component={IdeaView} />
                            <Route exact path="/" component={GeneralView} />
                            <Route path="/editar" component={EditarView} />
                            <Route path="/perfil" component={PerfilView} />
                            <Route path="/editarPerfil" component={EditarPerfilView} />

                        </div>
                    </div>

                </main>
            </div>
        </Router>
    );

}