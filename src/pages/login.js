import * as React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

export default function Login() {
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/').then((resp) => {
      setData(resp.data);
      console.log(Data[0]?.email);
    });
  }, []);

  const [Email, setEmail] = React.useState();
  const [Pass, setPass] = React.useState();
  const saveEmail = (event) => {
    setEmail(event.target.value);
  };
  const savePass = (event) => {
    setPass(event.target.value);
  };
  const CheckIfValid = (event) => {
    {
      Data[0]?.email == Email && Data[0]?.password == Pass
        ? Router.push('/').catch(console.error)
        : Router.push('/login').catch(console.error);
    }
  };
  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Sign in
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Sign in on the internal platform
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            name="email"
            onChange={saveEmail}
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
            onChange={savePass}
          />
          <Box sx={{ py: 2 }}>
            <Button color="primary" fullWidth size="large" type="submit" variant="contained" onClick={CheckIfValid}>
              Sign In Now
            </Button>
          </Box>
          <Typography color="textSecondary" variant="body2">
            Don&apos;t have an account?{' '}
            <NextLink href="/register">
              <Link
                to="/register"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: 'pointer',
                }}
              >
                Sign Up
              </Link>
            </NextLink>
          </Typography>
        </Container>
      </Box>
    </>
  );
}
