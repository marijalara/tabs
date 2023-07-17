import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const Project = () => {
    return (
        <div className='projects-container'>
            <header className='head4'>
                all projects
                <div className='underline4'></div>
            </header>
            <div className='card-container'>
                <Card sx={{ maxWidth: 750 }} >
                    <CardMedia 
                        sx={{ height: 260 }}
                        image='http://getwallpapers.com/wallpaper/full/b/5/0/1025571-cool-backgrounds-for-laptops-2880x1800-for-windows.jpg'
                        title='HTML&CSS'
                    />
                    <CardContent>
                        <Typography  gutterBottom variant="h5" className='title' >
                            01.
                            <br />
                            html&css
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Four loko heirloom 90's, mustache readymade microdosing lumbersexual
                            vexillologist synth. Sartorial shabby chic cloud bread, green juice meditation 
                            bitters before they sold out brunch. Four dollar toast retro pitchfork 
                            biodiesel cronut, waistcoat direct trade +1 williamsburg cornhole. Health 
                            goth williamsburg cliche lumbersexual listicle small batch, cardigan franzen 
                            snackwave knausgaard poutine humblebrag put a bird on it godard. 
                            Godard chillwave put a bird on it locavore salvia echo park copper 
                            mug roof party dreamcatcher kale chips listicle.
                        </Typography>
                        <div className='about-stack'>
                            <span>html</span>
                            <span>css</span>
                            <span>javascript</span>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 750 }} >
                    <CardMedia 
                        sx={{ height: 260 }}
                        image='https://tse3.mm.bing.net/th?id=OIP.coTJGIOyT-hi3-sB53DoEgHaE8&pid=Api&P=0&h=180'
                        title='ANGULAR'
                    />
                    <CardContent>
                        <Typography  gutterBottom variant="h5" className='title' >
                            02.
                            <br />
                            angular project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
                        image='https://tse2.mm.bing.net/th?id=OIP.jb8nHMxI3ZAHwAa8xH-6LAHaE8&pid=Api&P=0&h=180'
                        title='REACT'
                    />
                    <CardContent>
                        <Typography  gutterBottom variant="h5" className='title' >
                            03.
                            <br />
                            react project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
                    />
                    <CardContent>
                        <Typography  gutterBottom variant="h5" className='title' >
                            04.
                            <br />
                            gatsby project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
            </div>
        </div>
    )
}

export default Project