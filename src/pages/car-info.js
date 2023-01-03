import { Button, Card, Divider, Grid, ListItemButton, Stack, styled, TextField, Typography } from '@mui/material';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import CarView from 'src/components/product/carView';
import { DashboardLayout } from '../components/dashboard-layout';
import {  RouterLink} from 'react-router-dom';

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
  const [clientName, setclientName] = useState();
  const [clientNumber, setclientNumber] = useState();
  const [clientEmail, setclientEmail] = useState();
  const [clientZip, setclientZip] = useState();
  const [deals, setDeals] = useState([]);
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
  }, []);

  const found =
    deals.filter((obj) => {
      
      return obj.carId == id;
    });
    
    const foundip =
    found.filter((obj) => {
      
      return obj.ip == ip;
    });
  
  // console.log(foundip.length)
  // console.log(foundip.length>0?'true':'false')
  const sendDeal = (event) => {
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
    axios
      .post('https://carshopserver.vercel.app/deal', {
        allDetails,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  // console.log(isFoundIP )
  // console.log('test',(isFoundcarname || isFoundIP))
  return (
    <>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Typography variant="h5">{CarName}</Typography>
            <Typography variant="h5">{Price}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <CarView image={images} CarName={CarName} Price={Price} />
        </Grid>
        <Grid item xs={4}>
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
            <ListItemStyle component={RouterLink} to={'/products'}>
              <Button
                variant="contained"
                sx={{ width: '100%' }}
                onClick={sendDeal}
                disabled={
                  clientName == undefined ||
                  clientEmail == undefined ||
                  clientNumber == undefined ||
                  clientZip == undefined ||
                  foundip.length>0
                }
              >
                Send Deal
              </Button>
              </ListItemStyle>
            </Stack>{' '}
            <Stack direction="row">
              { foundip.length>0  ? <Typography color={'error'}>already you send a deal</Typography> : ''}
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
