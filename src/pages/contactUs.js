import Head from 'next/head';
import { Avatar, Card, Link, Stack, Typography, Box } from '@mui/material';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import { DashboardLayout } from '../components/dashboard-layout';

let data1 = [
  {
    title: 'Call Us',
    icon: <LocalPhoneRoundedIcon style={{ color: 'white' }} />,
    description:
      'If you have any questions or queries a member of staff will always be happy to help.feel free to contact us by telephone and we will be sure to get back to you as soon as possible.',
    link: '+961 03 32 59 06',
  }];
  let data2 = [
  {
    title: 'Visit Us',
    icon: <LocationOnRoundedIcon style={{ color: 'white' }} />,
    description: 'Our office is located in street 2 in street 1',
    link: 'Street, City, Province, Country',
  }];
  let data3 = [
  {
    title: 'Email Us',
    icon: <EmailRoundedIcon style={{ color: 'white' }} />,
    description: "If you're wondering about an order, our products, or our website, send us an email",
    link: 'info@lexycosmetics.com',
  }];


const ContactUs = () => (
  <>
    <Head>
      <title>contact | Material Kit</title>
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
   <Stack direction="row" justifyContent='space-between' sx={{p:4}}>
      <Card sx={{ p: 4, width: '30%',boxShadow:5 }}>
        <Stack spacing={3} justifyContent="space-between" height="100%">
          {data1.map((info, index) => (
            <ContactInfoSection key={index} {...info} />
          ))}
        </Stack>
      </Card>
      <Card sx={{ p: 4, width: '30%',boxShadow:5 }}>
        <Stack spacing={3} justifyContent="space-between" height="100%">
          {data2.map((info, index) => (
            <ContactInfoSection key={index} {...info} />
          ))}
        </Stack>
      </Card>
      <Card sx={{ p: 4, width: '30%',boxShadow:5 }}>
        <Stack spacing={3} justifyContent="space-between" height="100%">
          {data3.map((info, index) => (
            <ContactInfoSection key={index} {...info} />
          ))}
        </Stack>
      </Card>
      </Stack>
  </>
);

ContactUs.getLayout = (ContactUs) => <DashboardLayout>{ContactUs}</DashboardLayout>;

export default ContactUs;

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
