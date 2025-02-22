import "react";
import theme from "../../theme";
import {Button, Card, CardContent, Container, Grid2, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import graphic from "../../assets/student-banner.svg";
import '../../index.css';



const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
      navigate('/register')
    }

  return (
    <Container sx={{ position: "relative", overflow: "hidden", minHeight: "100vh"}}>
    {/* Graphic Section */}

                   <img
                     src={graphic}
                     alt="Students at Computers"
                     style={{
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                     opacity: 0.3, // Adjust the translucency
                     zIndex: 0 // Place it behind other elements

                     }}  />

    <Grid2
    container
            spacing={4} // Uniform spacing between Grid items
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "100vh", textAlign: "center", position: "relative" }} >

       {/* Welcome Header */}
     <Grid2 item xs={12}>
      <Typography className="app-header" variant="h1" color="primary" style={{fontFamily: 'Tektur Condensed', fontWeight: 700, fontStyle: 'normal'}}>
        Welcome to KnerdKode
      </Typography>
     </Grid2>


     {/* Card with Description */}
     <Grid2 item xs={12} sm={8} md={6}>
      <Card
        sx= {{ backgroundColor: theme.palette.background.secondary,
         padding: theme.spacing(4),
         boxShadow: "none",}}>
      <CardContent>
      <Typography
        variant="h2"
        color="secondary"
        gutterBottom
        sx={{ marginBottom: theme.spacing(2) }}
        style={{
                    fontFamily: 'Tektur Condensed',
                    fontWeight: 500,
                    fontStyle: 'normal'
                  }}>
        The ultimate companion for curious nerds seeking to expand their knowledge and master programming skills at their own pace.
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
    </Grid2>
    </Grid2>
    </Container>
  );
};
export default Welcome;
