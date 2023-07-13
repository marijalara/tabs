import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Cards = () => {
    return (
        <div className='cards-container'>
        <Card className='card'>
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                Web Development
            </Typography>
            <div className='underline3'></div>
            <Typography variant="body2" className='body2'>
                I'm baby meditation tofu chillwave, 
                distillery messenger bag thundercats 
                chicharrones kale chips gochujang. Banh 
                mi direct trade marfa salvia.
            </Typography>
        </CardContent>
        </Card>
        <Card className='card'>
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                App Design
            </Typography>
            <div className='underline3'></div>
            <Typography variant="body2" className='body2'>
                I'm baby meditation tofu chillwave, 
                distillery messenger bag thundercats 
                chicharrones kale chips gochujang. Banh 
                mi direct trade marfa salvia.
            </Typography>
        </CardContent>
        </Card>
        <Card className='card'>
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                Web Design
            </Typography>
            <div className='underline3'></div>
            <Typography variant="body2" className='body2'>
                I'm baby meditation tofu chillwave, 
                distillery messenger bag thundercats 
                chicharrones kale chips gochujang. Banh 
                mi direct trade marfa salvia.
            </Typography>
        </CardContent>
        </Card>
    </div>
    )
}

export default Cards