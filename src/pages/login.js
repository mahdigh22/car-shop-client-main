import * as React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

export default function Login() {
  const [Data, setData] = React.useState([]);

  const [Email, setEmail] = React.useState();
  const [Pass, setPass] = React.useState();
  const [loadingButton, setloadingButton] = React.useState(false);
  const saveEmail = (event) => {
    setEmail(event.target.value);
  };
  const savePass = (event) => {
    setPass(event.target.value);
  };
  async function getData() {
    await axios
      .post('https://carshopserver.vercel.app/api/auth', {
        Email,
        Pass,
      })
      .then(async function (response) {
        console.log(response);
        await axios
          .get('https://carshopserver.vercel.app/user/validateToken', {
            params: { token: response?.data },
            headers: {
              Authorization: `Bearer ${response?.data}`,
              'X-Custom-Header': 'foobar',
            },
          })
          .then(function (response) {
            if (response) {
              localStorage.setItem('token', JSON.stringify(response));
              setloadingButton(true);
              Router.push('/').catch(console.error);

              // window.location.reload();
            } else {
              Router.push('/login').catch(console.error);
            }
          });
      })
      .catch(function (error) {
        Router.push('/login').catch(console.error);
        alert('Oh wrong Email or Password!');
      });
  }

  async function CheckIfValid() {
    await getData();
  }
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
            {loadingButton ? (
              <Button  fullWidth size="large" type="submit" variant="contained" disabled onClick={()=>{}}>
               loading
              </Button>
            ) : (
              <Button color="primary" fullWidth size="large" type="submit" variant="contained" onClick={CheckIfValid}>
                Sign In Now
              </Button>
            )}
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
