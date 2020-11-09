import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button,Typography } from '@material-ui/core';

import './css/Item.css';

export class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const img = require.context('./img', true);
        return (
            <Card color="primary" className="cardRoot">
                {this.props.imagen === "" ? <div/> : <img className="image" src={this.props.imagen} />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button href={"/idea?id="+this.props.id}>VER MÁS</Button>
                </CardActions>
            </Card>

        );
    }
}