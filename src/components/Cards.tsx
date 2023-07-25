import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Cards: React.FC = () => {
    const isMobile=window.innerWidth <=600

    return (
         <div className={`cards-container ${isMobile ? 'mobilee' : 'desktop'}`}>
        <Card className='card'>
        <CardMedia className='media'
            sx={{height: 80, width: 120}}
            image='https://clipground.com/images/web-developer-logo-4.png'/>
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
        <CardMedia className='media1'
            sx={{height: 70, width: 70}}
            image='https://cdn.pixabay.com/photo/2015/07/06/01/46/diamond-832926_960_720.png'
        />
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
        <CardMedia className='media2'
            sx={{height: 80, width: 80}}
            image='https://thumbs.dreamstime.com/b/minimalist-modern-logo-simple-work-adjusted-to-suit-your-needs-web-design-logo-template-108974164.jpg'
        />
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