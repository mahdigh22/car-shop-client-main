import { Box, Button, Card, Divider, Grid, ListItemButton, Stack, styled, TextField, Typography } from '@mui/material';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CarView from 'src/components/product/carView';
import { DashboardLayout } from '../components/dashboard-layout';
import { RouterLink } from 'react-router-dom';
import Iconify from 'src/components/Iconify';

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

CarInfo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default function CarInfo() {
  const axios = require('axios');
  const [CarName, setCarName] = useState('');
  const [images, setimages] = useState([]);
  const [Price, setPrice] = useState();
  const [Status, setStatus] = useState();
  const [model, setModel] = useState();
  const [id, setId] = useState();
  const [Details, setDetails] = useState();
  const [clientName, setclientName] = useState();
  const [clientNumber, setclientNumber] = useState();
  const [clientEmail, setclientEmail] = useState();
  const [clientZip, setclientZip] = useState();
  const [deals, setDeals] = useState([]);
  const [users, setUsers] = useState([]);
  const [ip, setIP] = useState();

  useEffect(() => {
    axios.get('https://geolocation-db.com/json/').then((resp) => {
      setIP(resp.data.IPv4);
    });
  }, []);
  useEffect(() => {
    const img = JSON.parse(localStorage.getItem('images'));
    setCarName(localStorage.getItem('CarName'));
    setimages(img);
    setPrice(localStorage.getItem('Price'));
    setStatus(localStorage.getItem('Status'));
    setModel(localStorage.getItem('model'));
    setId(localStorage.getItem('id'));
    setDetails(JSON.parse(localStorage.getItem('details')));
  }, []);

  const [allDetails, setAllDetails] = useState({
    clientName: '',
    clientNumber: '',
    clientEmail: '',
    clientZip: '',
    model: '',
    CarName: '',
    id: '',
    ip: '',
  });

  useEffect(() => {
    setAllDetails({
      ...allDetails,
      clientName: clientName,
      clientNumber: clientNumber,
      clientEmail: clientEmail,
      clientZip: clientZip,
      model: model,
      CarName: CarName,
      id: id,
      ip: ip,
    });
  });
  useEffect(() => {
    axios.get('https://carshopserver.vercel.app/sendDeals').then((resp) => {
      setDeals(resp.data);
    });
    axios.get('https://carshopserver.vercel.app/users').then((resp) => {
      setUsers(resp.data);
    });
  }, []);

  const found = deals.filter((obj) => {
    return obj.carId == id;
  });

  const foundip = found.filter((obj) => {
    return obj.ip == ip;
  });
  const founduser = users.filter((obj) => {
    return obj.status == 'Banned';
  });
  const founduser2 = founduser.filter((obj) => {
    return obj.clientName == clientName;
  });
  const foundemail = founduser.filter((obj) => {
    return obj.clientEmail == clientEmail;
  });
  const foundnumber= founduser.filter((obj) => {
    return obj.clientNumber == clientNumber;
  });

  // console.log(founduser2)
  // console.log(foundip.length>0?'true':'false')
  async function sendDeal(event) {
    setAllDetails({
      ...allDetails,
      clientName: clientName,
      clientNumber: clientNumber,
      clientEmail: clientEmail,
      clientZip: clientZip,
      model: model,
      CarName: CarName,
      id: id,
      ip: ip,
    });
    console.log('allDetails', allDetails);

    await axios
      .post('https://carshopserver.vercel.app/deal', {
        allDetails,
      })
      .then(function (response) {
        sendUser();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function sendUser() {
    setAllDetails({
      ...allDetails,
      clientName: clientName,
      clientNumber: clientNumber,
      clientEmail: clientEmail,
      clientZip: clientZip,
      model: model,
      CarName: CarName,
      id: id,
      ip: ip,
    });
    console.log('allDetails', allDetails);

    await axios
      .post('https://carshopserver.vercel.app/InsertUser', {
        allDetails,
      })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // console.log(isFoundIP )
  // console.log('test',(isFoundcarname || isFoundIP))
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ position: 'fixed', zIndex: 2, backgroundColor: 'white', width: '100%', height: '90px' }}
      >
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
              {model}
            </Typography>
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
              - {CarName}
            </Typography>
            <Typography variant="h5" sx={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
              - {Price === 'undefined' ? '--' : Price}{' '}
              {Details?.Currency === 'dollar' ? (
                <Iconify icon={'bi:currency-dollar'} />
              ) : Details?.Currency === 'euro' ? (
                <Iconify icon={'ic:sharp-euro'} />
              ) : (
                '_'
              )}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <Iconify icon={'material-symbols:location-on-outline-rounded'} />
            <Typography sx={{ fontWeight: 500 }} variant="h6">
              {Details?.Location}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Grid container spacing={2} sx={{ p: 1, mt: 2 }}>
        <Grid item xs={12} lg={8}>
          <CarView image={images} CarName={CarName} Price={Price} Details={Details} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card sx={{ p: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Contact Dealer</Typography>
              <Typography variant="h6">phone number</Typography>
            </Stack>
            <Stack direction="column" sx={{ mt: 2 }} spacing={2}>
              <Typography variant="subtitle1">Hello, my name is</Typography>{' '}
              {
                <TextField
                  variant="standard"
                  size="small"
                  label="name"
                  onChange={(e) => {
                    setclientName(e.target.value);
                  }}
                ></TextField>
              }{' '}
              <Typography variant="subtitle1">
                {' '}
                and Im interested in this {model} {CarName} . Im in the{' '}
              </Typography>
              {
                <TextField
                  variant="standard"
                  size="small"
                  label="zip"
                  onChange={(e) => {
                    setclientZip(e.target.value);
                  }}
                ></TextField>
              }{' '}
              <Typography variant="subtitle1">area. You can reach me by email at</Typography>
              {
                <TextField
                  variant="standard"
                  size="small"
                  label="email"
                  onChange={(e) => {
                    setclientEmail(e.target.value);
                  }}
                ></TextField>
              }{' '}
              <Typography variant="subtitle1"> or by phone at</Typography>
              {
                <TextField
                  variant="standard"
                  size="small"
                  label="Phone"
                  onChange={(e) => {
                    setclientNumber(e.target.value);
                  }}
                ></TextField>
              }
              <Typography variant="subtitle1">(optional) Thank you!</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 3 }}>
              <ListItemStyle>
                <Button
                  variant="contained"
                  sx={{ width: '100%' }}
                  onClick={() => {
                    sendDeal();
                  }}
                  disabled={
                    clientName == undefined ||
                    clientEmail == undefined ||
                    clientNumber == undefined ||
                    clientZip == undefined ||
                    foundip.length > 0 ||
                    founduser2.length > 0 ||
                    foundemail.length > 0||foundnumber.length>0
                  }
                >
                  Send Deal
                </Button>
              </ListItemStyle>
            </Stack>{' '}
            <Stack direction="row">
              {foundip.length > 0 ? <Typography color={'error'}>already you send a deal</Typography> : ''}
              {founduser2.length > 0 || foundemail.length > 0||foundnumber.length>0 ? (
                <Typography color={'error'}>You are blocked</Typography>
              ) : (
                ''
              )}
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Stack direction="column">
              <Typography variant="caption">
                By submitting my contact information on CarGurus, I agree to receive communications from CarGurus, from
                the vehicle’s seller, and from the seller’s agent(s). If I include my phone number, I agree to receive
                calls and text messages (including via automation). I can opt out at any time. I also agree to the Terms
                of Use and Privacy Policy, which explain how my data is used to better understand my vehicle shopping
                interests. This consent is not required as a condition of purchase. Standard message and data rates may
                apply.
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
