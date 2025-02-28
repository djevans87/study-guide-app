import "react";
import {
    Grid2,
    Typography,
    TextField,
    Button,
    Paper,
    Box,
} from "@mui/material";
import theme from "../../theme";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {register} from "../../state_management/reducers/CurrentUserSlice.jsx";
import {readData, writeData}   from "../../dataService/dataService.jsx";

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
        const userData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            username,
            password,
        };
        const data = readData();
        if (data) {
            data.users.push(userData);
            writeData(data);
        }
        dispatch(register(userData));
    };

    return (
        <Box sx={{padding: "100px", backgroundColor: "#F2E5BF", minHeight: "100vh"}}>

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