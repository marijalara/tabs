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
                <Card sx={{ maxWidth: 500 }} >
                    <CardMedia 
                        sx={{ height: 260 }}
                        image='http://getwallpapers.com/wallpaper/full/b/5/0/1025571-cool-backgrounds-for-laptops-2880x1800-for-windows.jpg'
                        title='laptop'
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
            </div>
        </div>
    )
}

export default Project