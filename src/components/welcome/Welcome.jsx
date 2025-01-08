import "react";
import { useState } from "react";
import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../../assets/app-logo.svg";

const Welcome = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
    <div>
      <Logo width="100" height="100" />
      <Typography variant="h1" color="primary">
        Welcome to the Study Helper App
      </Typography>
      <Card>
        <CardContent>
      <Typography variant="h2" color="secondary">
        Your programming companion
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      </CardContent>
      </Card>
    </div>
    </Container>
  );
};
export default Welcome;
