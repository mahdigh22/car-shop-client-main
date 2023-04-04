import Head from 'next/head';
import { Avatar, Card, Link, Stack, Typography, Box, Grid, TextField, Button, Alert, Collapse, IconButton, Snackbar } from '@mui/material';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CloseIcon from '@mui/icons-material/Close';
import { DashboardLayout } from '../components/dashboard-layout';
import { useState } from 'react';
import { useEffect } from 'react';

let data1 = [
  {
    title: 'Call Us',
    icon: <LocalPhoneRoundedIcon style={{ color: 'white' }} />,
    description:
      'If you have any questions or queries a member of staff will always be happy to help.feel free to contact us by telephone and we will be sure to get back to you as soon as possible.',
    link: '+961 03 32 59 06',
  },
];
let data2 = [
  {
    title: 'Visit Us',
    icon: <LocationOnRoundedIcon style={{ color: 'white' }} />,
    description: 'Our office is located in street 2 in street 1',
    link: 'Street, City, Province, Country',
  },
];
let data3 = [
  {
    title: 'Email Us',
    icon: <EmailRoundedIcon style={{ color: 'white' }} />,
    description: "If you're wondering about an order, our products, or our website, send us an email",
    link: 'info@CarShop.com',
  },
];

ContactUs.getLayout = (ContactUs) => <DashboardLayout>{ContactUs}</DashboardLayout>;
export default function ContactUs() {
  const axios = require('axios');
  const [fullName, setfullNmame] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [allDetails, setAllDetails] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    Message: '',
  });
  useEffect(() => {
    setAllDetails({
      ...allDetails,
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      Message: Message,
    });
  });
  async function changeHandler  (e)  {
    setAllDetails({
      ...allDetails,
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      Message: Message,
    });
    await axios
      .post('https://carshopserver.vercel.app/m', {
        allDetails,
      })
      .then(function (response) {
        setOpen(true)
      })
      .catch(function (error) {
        console.log(error);
      });
      setfullNmame('')
      setEmailAddress('')
      setPhoneNumber('')
      setMessage('')
  };
  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message had been sent
        </Alert>
      </Snackbar>
      <Head>
        <title>contact </title>
      </Head>
      <Stack direction="column" alignItems="center" sx={{ mt: 3, mb: 3 }}>
        <Stack direction="row">
          <Typography variant="h4"> Get in Touch</Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1"> Feel free to contact us for your queries as we are offering</Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1"> support 24/7 & our 9 am to 5 pm | 5+ GMT</Typography>
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, width: '100%', boxShadow: 5, height: '280px' }}>
            <Stack spacing={3} justifyContent="space-between" height="100%">
              {data1.map((info, index) => (
                <ContactInfoSection key={index} {...info} />
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, width: '100%', boxShadow: 5, height: '280px' }}>
            <Stack spacing={3} justifyContent="space-between" height="100%">
              {data2.map((info, index) => (
                <ContactInfoSection key={index} {...info} />
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, width: '100%', boxShadow: 5, height: '280px' }}>
            <Stack spacing={3} justifyContent="space-between" height="100%">
              {data3.map((info, index) => (
                <ContactInfoSection key={index} {...info} />
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Stack direction="column" alignItems="center" sx={{ mt: 3, mb: 3 }}>
        <Stack direction="row">
          <Typography variant="h4"> Message Us</Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1">
            {' '}
            We love to hear from our respected customers. Feel free to write an Email,
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1"> Our team will try to respond ASAP.</Typography>
        </Stack>
      </Stack>
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={6}>
          <Card sx={{ width: '100%', p: 3, boxShadow: 5 }}>
            <Stack direction="column" spacing={2} justifyContent="space-between" height="100%">
              <TextField
                id="outlined-basic"
                label="Full Name"
                value={fullName}
                variant="outlined"
                fullWidth required
                onChange={(e) => {
                  setfullNmame(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                value={emailAddress}
                label="Email Address"
                variant="outlined"
                fullWidth required
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                value={phoneNumber}
                variant="outlined"
                type="number"
                fullWidth required
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Type Your Message"
                variant="outlined"
                value={Message}
                fullWidth
                multiline
                required
                rows={5}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <Button variant="contained" fullWidth onClick={changeHandler} disabled={fullName&&emailAddress&&phoneNumber&&Message?false:true}>
                Send Message
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

function ContactInfoSection(props) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5"> {props.title} </Typography>
      <Typography variant="body1">{props.description}</Typography>
      <Stack direction="row" spacing="14px" alignItems="center">
        <Avatar sx={{ bgcolor: 'primary.light' }}>{props.icon}</Avatar>
        <Link variant="h6" sx={{ fontSize: { xs: '1.3rem', md: '1.2rem' } }}>
          {props.link}
        </Link>
      </Stack>
    </Stack>
  );
}
