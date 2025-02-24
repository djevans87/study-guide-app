import 'react'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Box, Button, CardContent, Grid2, Typography} from "@mui/material";
import theme from "../../theme.jsx";

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
                {[
                    {
                        title: "Documentation",
                        description: "Explore a vast library of articles on various programming topics, including tutorials, guides, and best practices. Learn from industry experts and stay up-to-date with the latest trends and technologies.",
                        path: "/documentation",
                    },
                    {
                        title: "Multiple Choice Quizzes",
                        description: "Test your knowledge and skills with our multiple choice quizzes, covering a wide range of programming topics. Identify areas for improvement and track your progress over time.",
                        path: "/multiple-choice",
                    },
                    {
                        title: "Coding Challenges",
                        description: "Practice your coding skills with our interactive challenges, designed to simulate real-world scenarios. Develop problem-solving skills, learn new concepts, and improve your coding abilities.",
                        path: "/coding-challenge",
                    },
                    {
                        title: "Note Cards",
                        description: "Create and review digital flashcards to help you memorize key concepts, terms, and formulas. Organize your notes, track your progress, and reinforce your learning with our note card system.",
                        path: "/note-card",
                    },
                    {
                        title: "Track Your Progress",
                        description: "Set and track your personal goals, monitoring your progress along the way. Celebrate your achievements, stay motivated, and unlock your full potential as you work towards your objectives.",
                        path: "/goals-progress",
                    },
                ].map((step, index) => (
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
                                <Typography variant="body2">{step.description}</Typography>
                            </CardContent>
                        </Button>
                    </Grid2>
                ))}
            </Grid2>
        </Box>


    );
};

export default Dashboard;
