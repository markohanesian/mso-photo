import * as React from "react";
import NavBar from "../../components/nav/NavBar";
// import {
//     Card, CardContent, Grid, TextField, Button, Typography
// } from "@mui/material";
import { Container, Typography, Button } from "@mui/material";
import SocialButtonsGroup from "../../components/social buttons group/social-buttons-group";

export default function Contact() {
  // const sendEmail = () => {
  //     window.location = "mailto:hello@markohanesian.com";
  // }

  return (
    <>
      <NavBar />
      <Container
        maxWidth="sm"
        sx={{
          padding: "3rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "1rem 0 3rem 0", fontSize: '30px'
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            marginBottom: "3rem",
          }}
        >
          Please send an email with some information about the type of service you would like to book and we'll get back to you as
          soon as possible.
          <ul>
            <li>Name:</li>
            <li>Email:</li>
            <li>Phone Number:</li>
            <li>
              Project Description: Please provide a brief description of your
              project, including the type of photography you're interested in,
              the date and time of your event, and any other relevant details.
            </li>
            <li>
              Other Information: Please feel free to include any other
              information that you think would be helpful, such as your website
              or social media handles.
            </li>
          </ul>
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          href={`mailto:hello@markohanesian.com`}
          style={{ backgroundColor: "#070b4a", width: '200px'}}
        >
          <Typography variant="button">
            Email
          </Typography>
        </Button>
        <SocialButtonsGroup />
      </Container>
      {/* <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth onSubmit={sendEmail}>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid> */}
    </>
  );
}
