﻿import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InteractionList from './InteractionList'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function getQueryVariable(variable)
  {
        var query = window.location.search.substring(1);
        console.log(query)
        var vars = query.split("&");
        console.log(vars) 
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }

let idea = {};

const startItems = () => {
   
  const id = getQueryVariable('id');
  var path = "https://mysterious-refuge-36454.herokuapp.com/ideas/"+id;

  fetch(path)
    .then(response => response.json())
    .then(newidea => {
      idea=newidea;
    }).catch(error => console.error('Error:', error));;
}

export default function TabPanelInteracHechas() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [interac, setInterac] = React.useState([]);

  startItems();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    componentDidMount(event, newValue);
  };

  const componentDidMount = (event, newValue) => {
    var path = "https://mysterious-refuge-36454.herokuapp.com/interaccion/byIdeaAndTipo/"+getQueryVariable('id');
    if (newValue === 0){
      path = path+"/comentario"
    } else if (newValue === 1){
      path = path+"/donacion"
    } else if (newValue === 2){
      path = path+"/inversion"
    }

    let usersList = [];

    fetch(path)
      .then(response => response.json())
      .then(data => {

          data.map((interaction,i) => {
            usersList.push({
            "comentario":interaction.comentario,
            "usuario":interaction.usuario,
            "calificacion": interaction.calificacion,
            "monto": interaction.monto,
            "tipo": interaction.tipo,
            "usuario": interaction.usuario,
            "interaccionId": interaction.id
          })
        });
        setInterac(usersList)
      });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  variant="fullWidth">
          <Tab label="Comentarios" {...a11yProps(0)} />
          <Tab label="Donaciones" {...a11yProps(1)} />
          <Tab label="Inversiones" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <InteractionList interactionList={interac}/>
      </TabPanel>

      <div style={{display: idea.pequenasdonaciones ? 'block' : 'none' }}>
      <TabPanel value={value} index={1}>
        <InteractionList interactionList={interac}/>
      </TabPanel>
      </div>

      <div style={{display: !idea.pequenasdonaciones ? 'block' : 'none' }}>
        <TabPanel value={value} index={1}>
          Este proyecto no tiene Donaciones
        </TabPanel>
      </div>

      <div style={{display: idea.grandesinversiones ? 'block' : 'none' }}>
        <TabPanel value={value} index={2}>
          <InteractionList interactionList={interac}/>
        </TabPanel>
      </div>

      <div style={{display: !idea.grandesinversiones ? 'block' : 'none' }}>
        <TabPanel value={value} index={2}>
          Este proyecto no tiene Inversiones
        </TabPanel>
      </div>

    </div>
  );
}