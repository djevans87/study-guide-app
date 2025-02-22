import "react";
import {
    Grid2,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
    Paper,
    Box,
} from "@mui/material";
import theme from "../../theme";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {register} from "../../state_management/reducers/currentUserSlice.jsx";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register({firstName, lastName, email, phoneNumber, username, password}));
    };

    return (
        <Box sx={{padding: "100px", backgroundColor: "#F2E5BF", minHeight: "100vh"}}>
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
                                backgroundColor: theme.palette.background.secondary,
                                transition: "backgroundColor 0.3s ease",
                                "&:hover": {
                                    backgroundColor: theme.palette.background.primary,
                                    color: theme.palette.text.primary
                                },
                                color: theme.palette.text.secondary,
                            }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2">{step.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>

            {/* User Info Section */}
            <Typography variant="h4" align="center" gutterBottom>
                Register Now
            </Typography>
            <Paper
                elevation={3}
                sx={{padding: "30px", maxWidth: "600px", margin: "0 auto"}}
                style={{
                    backgroundColor: theme.palette.background.secondary, // Use secondary background
                    color: theme.palette.text.primary,
                }}>

                <Grid2 container spacing={3}>
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}/>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Phone Number"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            required
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            sx={{textTransform: "none"}}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                    </Grid2>
                </Grid2>
            </Paper>
        </Box>
    );
};

export default Register;