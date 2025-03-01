import "react";
import theme from "../../theme";
import {Button, Card, CardContent, Container, Grid2, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import graphic from "../../assets/student-banner.svg";
import './Welcome.css';
import {WELCOME_PAGE_DESCRIPTION_CARDS} from "../../components/common/Constants.jsx";

const Welcome = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/register')
    }

    return (
        <Container className="welcome-page-container"
                   style={{backgroundImage: `url(${graphic})`}}>
            <Grid2 className="grid-container"
                   container
                   spacing={6}
                   >

                {/* Welcome Header */}
                <Grid2 className="grid-header" item xs={12}>
                    <Typography className="app-header"
                                variant="h1"
                                color="primary"
                    >
                        Welcome to KnerdKode
                    </Typography>
                </Grid2>

                {/* Welcome Sub Header */}
                <Grid2 className="grid-sub-header" item xs={12} sm={8} md={6}>
                    <Card className="app-sub-header">
                        <CardContent>
                            <Typography
                                variant="h2"
                                color="secondary"

                                sx={{marginBottom: theme.spacing(2)}}
                            >
                                The ultimate companion for curious nerds seeking to expand their knowledge and master
                                programming skills at their own pace.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Button
                    className="get-started-button"
                    variant="contained"
                    color="secondary"
                    onClick={handleGetStarted}
                    >
                    Get Started Today!!
                </Button>
                <Grid2 className="grid-description-container"
                       container
                       spacing={4}
                       sx={{
                           padding: {xs: 2, sm: 4, md: 6, lg: 8},
                       }}>
                    {WELCOME_PAGE_DESCRIPTION_CARDS.map((card, index) => (
                        <Grid2 className="grid-description-card"
                               item xs={12} sm={6} md={3}
                               key={index}
                        >
                            <Card className="app-description-card"
                            >
                                <CardContent color="secondary">
                                    <Typography className="description-card-title" variant="h6" gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography className="description-card-content" variant="body2">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>


                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>
        </Container>
    );
};
export default Welcome;
