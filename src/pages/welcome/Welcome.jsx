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
                     zIndex: 0 ,// Place it behind other elements
                    pointerEvents: 'none',
                     }}  />

    <Grid2
    container
            spacing={4} // Uniform spacing between Grid items
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "100vh", textAlign: "center", position: "relative" }} >

       {/* Welcome Header */}
     <Grid2 item xs={12}>
      <Typography className="app-header" variant="h1" color="primary" style={{fontFamily: 'Tektur Condensed', fontWeight: 700, fontStyle: 'normal', fontSize: '7.5rem'}}>
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

      </CardContent>
      </Card>
    </Grid2>
    </Grid2>
        {/* Header */}
        <Typography variant="h3" align="center" gutterBottom>
            Join Our Community
        </Typography>

        {/* How It Works Section */}
        <Typography variant="h4" align="center" gutterBottom>
            How It Works
        </Typography>
        <Grid2
            container
            spacing={4}
            justifyContent="center"
            sx={{
                marginBottom: "40px",
                padding: {xs: 2, sm: 4, md: 6, lg: 8},
            }}>
            {[
                {
                    title: "Sign Up",
                    description: "Join our community by creating a free account.",
                },
                {
                    title: "Choose a Topic",
                    description: "Choose from a wide range of programming topics to start learning.",
                },
                {
                    title: "Learn and Practice",
                    description: "Dive into lessons and practice with real-world exercises.",
                },
                {
                    title: "Track Your Progress",
                    description: "Keep track of your achievements and continue improving.",
                },
            ].map((step, index) => (
                <Grid2
                    item xs={12} sm={6} md={3}
                    key={index}
                >
                    <Card
                        sx={{
                            maxWidth: 300,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            "& .MuiPaper-root-MuiCard-root": {
                                backgroundColor: theme.palette.background.secondary,
                            },
                            transition: "backgroundColor 0.3s ease",
                            "&:hover": {
                                "& .MuiPaper-root-MuiCard-root": {
                                    backgroundColor: theme.palette.background.secondary,
                                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                                },
                            },
                            color: theme.palette.text.primary,
                            opacity: 1,
                            zIndex: 1,
                        }}>
                        <CardContent color="secondary">
                            <Typography variant="h6" gutterBottom>
                                {step.title}
                            </Typography>
                            <Typography variant="body2">{step.description}</Typography>
                        </CardContent>
                    </Card>

                </Grid2>
            ))}
        </Grid2>
        <Button
            variant="contained"
            color="secondary"
            onClick={handleGetStarted}
            sx={{ textTransform: "none" }}>
            Get Started Today!!
        </Button>
    </Container>
  );
};
export default Welcome;
