import "react";
import { useState } from "react";
import theme from "../../theme";
import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import graphic from "../../assets/student-banner.svg";
import React from "react";


const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
      navigate('/register')
    }

  return (
    <Container>
    <Grid
    container
            spacing={4} // Uniform spacing between Grid items
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "100vh", textAlign: "center" }} >

       {/* Welcome Header */}
     <Grid item xs={12}>
      <Typography variant="h1" color="primary">
        Welcome to the Study Helper App
      </Typography>
     </Grid>
        {/* Graphic Section */}
             <Grid item xs={12} sm={8} md={6}>
               <img
                 src={graphic}
                 alt="Students at Computers"
                 style={{
                   width: "100%",
                   maxWidth: "600px",
                   height: "auto",
                   display: "block",
                   margin: "0 auto",
                 }}
               />
             </Grid>

     {/* Card with Description */}
     <Grid item xs={12} sm={8} md={6}>
      <Card
        sx= {{ backgroundColor: theme.palette.background.secondary,
         padding: theme.spacing(4),
         boxShadow: "none",}}>
      <CardContent>
      <Typography
        variant="h2"
        color="secondary"
        gutterBottom
        sx={{ marginBottom: theme.spacing(2) }}>
        Your ultimate companion for learning and mastering programming skills at your own pace.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleGetStarted}
        sx={{ textTransform: "none" }}>
        Get Started Today!!
      </Button>
      </CardContent>
      </Card>
    </Grid>
    </Grid>
    </Container>
  );
};
export default Welcome;
