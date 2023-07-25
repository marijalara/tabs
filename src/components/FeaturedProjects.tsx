import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {

    let navigate=useNavigate()
    const routheChangeFeatured=() => {
        let path=`/projects`
        navigate(path)

        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <div className='featured-container'>
        <div className='card-container'>
        <Card sx={{ maxWidth: 750 }}>
            <CardMedia 
                sx={{ height: 260 }}
                image='https://www.freelogoservices.com/blog/wp-content/uploads/laptop-header-picture-id910806154.jpg'
                title='ANGULAR'
                className='custom-image'
            />
            <CardContent>
                <Typography  gutterBottom variant="h5" className='title' >
                    01.
                    <br />
                    angular project
                </Typography>
                <Typography variant="body2" color="text.secondary" className='parag'>
                    I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights 
                    slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health 
                    goth kickstarter cardigan. Roof party pour-over swag pork belly glossier 
                    DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food 
                    truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.
                </Typography>
                <div className='about-stack'>
                    <span>angular</span>
                    <span>firebase</span>
                </div>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 750 }} >
            <CardMedia 
                sx={{ height: 260 }}
                image='https://www.traverse-events.com/blog/wp-content/uploads/2018/09/laptop-and-coffee-min-1024x683.jpg'
                title='REACT'
                className='custom-image'
            />
            <CardContent>
                <Typography  gutterBottom variant="h5" className='title' >
                    02.
                    <br />
                    react project
                </Typography>
                <Typography variant="body2" color="text.secondary" className='parag'>
                    Tumblr intelligentsia brunch, heirloom crucifix tousled butcher poke fanny 
                    pack lumbersexual forage. Keytar portland lyft mixtape fixie tofu vice 
                    blue bottle. Ethical waistcoat flannel vape banjo you probably haven't 
                    heard of them mlkshk, mumblecore umami fam slow-carb. Shaman fashion 
                    axe mlkshk bitters quinoa cornhole pok pok pabst cray cronut snackwave 
                    dreamcatcher you probably haven't heard of them.
                </Typography>
                <div className='about-stack'>
                    <span>react</span>
                    <span>redux</span>
                </div>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 750 }} >
            <CardMedia 
                sx={{ height: 260 }}
                image='https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id832282452?k=6&m=832282452&s=612x612&w=0&h=loZCjflN97l291gseRTHiol3apH8PcPBz6LBjiwub3E='
                title='GATSY'
                className='custom-image'
            />
            <CardContent>
                <Typography  gutterBottom variant="h5" className='title' >
                    03.
                    <br />
                    gatsby project
                </Typography>
                <Typography variant="body2" color="text.secondary" className='parag'>
                    Vaporware YOLO kinfolk iceland. Tbh swag fashion axe brooklyn literally 
                    +1 shoreditch. Letterpress heirloom ethical gluten-free disrupt. VHS post-ironic 
                    godard, tumeric ugh next level farm-to-table tilde. Jean shorts next level 
                    sartorial, health goth poutine offal flexitarian pour-over messenger bag.
                </Typography>
                <div className='about-stack'>
                    <span>gatsby</span>
                    <span>strapi</span>
                </div>
            </CardContent>
        </Card>
        <button className='button3' onClick={routheChangeFeatured}>projects</button>
        </div>
        </div>
    )
}

export default FeaturedProjects