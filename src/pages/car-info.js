import { Button, Card, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CarView from 'src/components/product/carView';
import { DashboardLayout } from '../components/dashboard-layout';
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
    });
  });
  useEffect(() => {
    axios.get('https://carshopserver.vercel.app/sendDeals').then((resp) => {
      setDeals(resp.data);
    });
  }, []);
  const isFoundcarname = deals.some((element) => {
    if (element.carName == localStorage.getItem('CarName')) {
      return true;
    }

    return false;
  });
  const isFoundname = deals.some((element) => {
    if (element.clientName == clientName) {
      return true;
    }

    return false;
  });

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
              <Button
                variant="contained"
                sx={{ width: '100%' }}
                onClick={sendDeal}
                disabled={
                  clientName == undefined ||
                  clientEmail == undefined ||
                  clientNumber == undefined ||
                  clientZip == undefined ||
                  (isFoundcarname && isFoundname)
                }
              >
                Send Deal
              </Button>
             
            </Stack> <Stack direction="row">
                {isFoundcarname && isFoundname ? <Typography color={'error'}>already you send a deal</Typography> : ''}
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
