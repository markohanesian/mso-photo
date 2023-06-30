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
        maxWidth="lg"
        sx={{
          padding: "3rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "1rem 0 3rem 0",
          }}
        >
          Contact
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          target="_top"
          rel="noopener noreferrer"
          href={`mailto:hello@markohanesian.com`}
        >
          <Typography variant="button" style={{ fontSize: "0.69rem" }}>
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
