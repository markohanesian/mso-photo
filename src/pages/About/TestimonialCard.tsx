import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Stack } from '@mui/material';

export default function TestimonialCard() {

    return (
        <Stack direction='row' spacing={3}>
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
                    alt="Allen Headshot Photo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ quotes: 'initial', fontStyle: 'italic' }}>
                        "I needed some headshots for my business and Mark did a great job. He was easy to work with, really friendly, and had great ideas on how to pose (even though I wasn't sure what to do). I appreciate his attention to detail and going above and beyond to create great pictures."
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'blue' }} aria-label="avatar">
                            A
                        </Avatar>
                    }
                    title="Avo"
                    subheader="Engagement Session Client"
                />
                <CardMedia
                    component="img"
                    height="345"
                    image='/images/avo-jen-engagement.jpg'
                    alt="Avo Couple Engagement Photo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ quotes: 'initial', fontStyle: 'italic' }}>
                    "Mark shot photos of my fiance and I right after we got engaged and they were perfect. He captured our happiness and was able to direct us to get the great lighting and the best backdrop. I would recommend him for any event."
                    </Typography>
                </CardContent>
            </Card>
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
            </Card></Stack>
    );
}
