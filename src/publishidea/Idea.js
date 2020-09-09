import React from 'react';

import './Publish.css';
import './Idea.css';

import {Paper,Typography,LinearProgress,Grid,Divider,CardMedia} from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';

import TabPanelInteractuar from './Interactuar/TabPanelInteractuar';

import img from "./img/PLACEHOLDERTHUMBNAIL.jpg";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

const theme = createMuiTheme({
    typography: {
      
        h3: {
            fontSize: 30,
            fontFamily: 'Verdana',
            fontWeight: 600,
            textAlign: 'left'
      },
      h5: {
          fontStyle: 'italic'
      },
      body2: {
        textAlign: 'center',
        fontSize: 20

      }
    },
  });

  var porcentaje=0;

  function startItems() {
     
    const name=localStorage.getItem("Nombre");
    const categ=localStorage.getItem("Categoria");
    const desc=localStorage.getItem("Descripción");
    var money=localStorage.getItem("Monto");
    const date=localStorage.getItem("Fecha");
    const user=localStorage.getItem("User");
    var moneyDonated=localStorage.getItem("MontoDonado");
    if (name===null || name ===""){
        localStorage.setItem("Nombre","Nombre de idea de prueba");
    }
    if (categ===null || categ===""){
        localStorage.setItem("Categoria","Categoria");
    }
    if (desc===null || desc===""){
        localStorage.setItem("Descripción","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.");
    }
    if (money===null || money===""){
        localStorage.setItem("Monto",100000);
        var money=100000;
    }
    if (date===null || date===""){
        localStorage.setItem("Fecha",format(new Date(),"MMM dd yyyy"));
    }
    if (user===null || user===""){
        localStorage.setItem("User","UsuarioDePrueba");
    }
    if (moneyDonated===null || moneyDonated===""){
        if (money===null || money===""){
            localStorage.setItem("MontoDonado",50000);
        }else {
            moneyDonated=money/2;
            localStorage.setItem("MontoDonado",money/2);
        }
        
    }
    porcentaje= (100/money)*moneyDonated;
    
  }


export class Idea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        startItems();
        
        return (
            <Paper className="paperIdea" elevation={20}>
                <ThemeProvider theme={theme}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                        
                                <Typography gutterBottom variant="h3">
                                
                                {localStorage.getItem("Nombre")}
                                </Typography>
                        
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="h6">
                                {/*<Chip label={localStorage.getItem("Categoria")} /> */}
                                {localStorage.getItem("Categoria")}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                   

                    <Typography gutterBottom variant="h5">
                            
                            de  {localStorage.getItem("User")}
                    </Typography>

                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="280"
                        image={img}
                        title="img"
                        />

                    <br/>

                    <Typography variant="body1" gutterBottom>
                            {localStorage.getItem("Descripción")} <br/>
                    </Typography>

                    <Divider variant="middle" />

                    <Typography variant="body2" gutterBottom>
                        Recaudado ${localStorage.getItem("MontoDonado")} de  ${localStorage.getItem("Monto")} ({porcentaje}%)
                    <br/>
                    
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={porcentaje} />
                    <Typography variant="body2" gutterBottom>
                        Aporta antes de {localStorage.getItem("Fecha")} <br/>
                    <br/>
                    
                    </Typography>

                    <Divider variant="middle" /><br></br>

                    <TabPanelInteractuar/>  

                </ThemeProvider>
            </Paper>
        );
    }

    
}