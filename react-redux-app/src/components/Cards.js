import React from 'react';

import Typography from '@material-ui/core/Typography';



const Card = (props) => {
    return (
        <div className = 'card'>
        
        <Typography variant="h4" >{props.title}</Typography>
        <Typography variant="h5" >Number of {props.description} of Corona Virus. 🔽</Typography>
        <Typography variant="h5">{props.cases}</Typography>
        <Typography variant="h5">Date: {props.date}</Typography>
    
        </div>
    )
}

export default Card;