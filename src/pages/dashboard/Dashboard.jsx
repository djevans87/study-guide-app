import 'react'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Box, Button, CardContent, Grid2, Typography} from "@mui/material";
import theme from "../../theme.jsx";
import {DASHBOARD_PAGE_DESCRIPTION_CARDS} from "../../components/common/Constants.jsx";

const Dashboard = () => {

    const {isLoggedIn, firstName} = useSelector((state) =>
        state.currentUser);
    const navigate = useNavigate();
    return (
        <Box sx={{padding: "100px", backgroundColor: "#F2E5BF", minHeight: "100vh"}}>
            {isLoggedIn ? (
                <Typography variant="h3" color="inherit" align="center" gutterBottom>
                    Welcome to your Dashboard, {firstName}!
                </Typography>
            ) : (
                <Typography variant="h3" color="inherit" align="center" gutterBottom>
                    Welcome to the Dashboard, you are not logged in! Please login or register to continue.
                </Typography>
            )}
            <Grid2
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    marginBottom: "40px",
                    padding: {xs: 2, sm: 4, md: 6, lg: 8},
                }}>
                {DASHBOARD_PAGE_DESCRIPTION_CARDS.map((step, index) => (
                    <Grid2
                        item xs={12} sm={6} md={3}
                        key={index}
                    >
                        <Button
                            sx={{
                                maxWidth: 300,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: theme.palette.background.secondary,
                                transition: "backgroundColor 0.3s ease",
                                "&:hover": {
                                    backgroundColor: theme.palette.background.primary,
                                    color: theme.palette.text.primary
                                },
                                color: theme.palette.text.secondary,
                            }} onClick={() => {
                            navigate(step.path);
                        }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2">
                                    {step.description}
                                </Typography>
                            </CardContent>
                        </Button>
                    </Grid2>
                ))}
            </Grid2>
        </Box>


    );
};

export default Dashboard;
