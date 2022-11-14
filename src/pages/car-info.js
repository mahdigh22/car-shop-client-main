import { Button, Card, Divider, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CarView from 'src/components/product/carView';
import { DashboardLayout } from '../components/dashboard-layout';
CarInfo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default function CarInfo() {
  const [CarName, setCarName] = useState();
  const [images, setimages] = useState([]);
  const [Price, setPrice] = useState();
  const [Status, setStatus] = useState();

  useEffect(() => {
    const img = JSON.parse(localStorage.getItem('images'));
    setCarName(localStorage.getItem('CarName'));
    setimages(img);
    setPrice(localStorage.getItem('Price'));
    setStatus(localStorage.getItem('Status'));
  }, []);
  console.log('test', images);
  return (
    <>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Typography variant="h5" >{CarName}</Typography>
            <Typography variant="h5">{Price}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <CarView image={images} CarName={CarName} Price={Price} />
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ p: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">Contact Dealer</Typography>
              <Typography variant="subtitle1">phone number</Typography>
            </Stack>
            <Stack direction="column" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Hello, my name is mahdi ghoussein and I'm interested in this 2016 Land Rover Range Rover Evoque. I'm in
                the ZIP area. You can reach me by email at mohamadmahdi.ghoussein@gmail.com or by phone at 123-456-7890
                (optional) Thank you!
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 3 }}>
              <Button variant="contained" sx={{ width: '100%' }}>
                Send Deal
              </Button>
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
