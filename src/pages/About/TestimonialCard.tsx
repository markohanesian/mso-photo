import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function TestimonialCard() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                        A
                    </Avatar>
                }
                title="Allen"
                subheader="Professional headshot Session Client"
            />
            <CardMedia
                component="img"
                height="345"
                image='/images/allen-headshot.jpg'
                alt="Allen Headshot"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ quotes: 'initial', fontStyle: 'italic' }}>
                    "I needed some headshots for my business and Mark did a great job. He was easy to work with, really friendly, and had great ideas on how to pose (even though I wasn't sure what to do). I appreciate his attention to detail and going above and beyond to create great pictures."
                </Typography>
            </CardContent>
        </Card>
    );
}
