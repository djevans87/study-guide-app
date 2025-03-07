import "react";
import './Register.css';
import {
    Grid2,
    Typography,
    TextField,
    Button,
    Paper,
    Box, Container,
} from "@mui/material";
import theme from "../../theme";
import {useState} from "react";
import graphic from "../../assets/student-banner.svg";


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      console.log('Form submitted:',{firstName, lastName, email,
          phoneNumber, username, password});
        };


    return (
        <Container className="register-container"
            // style={{
            //     backgroundImage: `url(${graphic})`,
            // }}
            >
            <Box className="register-box">

                {/* User Info Section */}
                 <Typography className="register-header"
                             color="secondary.contrastText"
                             variant="h2"
                             align="center"
                             gutterBottom>
                Register Now
            </Typography>
            <Paper className="register-paper"
                elevation={3}
                style={{
                    backgroundColor: theme.palette.background.secondary, // Use secondary background
                    color: theme.palette.text.primary,
                }}>

                <Grid2 className="register-grid" container spacing={3}>
                    <Grid2 className="register-grid-item"  item xs={12} sm={6}>
                        <TextField className="register-text-field"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid2>
                    <Grid2 className="register-grid-item" item xs={12} sm={6}>
                        <TextField className="register-text-field"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}/>
                    </Grid2>
                    <Grid2 className="register-grid-item" item xs={12}>
                        <TextField className="register-text-field"
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Grid2>
                    <Grid2 className="register-grid-item" item xs={12}>
                        <TextField className="register-text-field"
                            label="Phone Number"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Grid2>
                    <Grid2 className="register-grid-item" item xs={12}>
                        <TextField className="register-text-field"
                            label="Username"
                            variant="outlined"
                            fullWidth
                            required
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Grid2>
                    <Grid2 className="register-grid-item" item xs={12}>
                        <TextField className="register-text-field"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Grid2>
                    <Grid2 className="register-grid-item" item xs={12}>
                        <Button className="register-button"
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
        </Container>
    );
};

export default Register;