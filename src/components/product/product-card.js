import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Modal, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import { Link, Stack } from '@mui/material';
import Label from '../Label';
import { styled } from '@mui/system';
import { useState } from 'react';
import CarView from './carView';
import NextLink from 'next/link';
import CarInfo from 'src/pages/car-info';
const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
ProductCard.propTypes = {
  product: PropTypes.object,
};

const style = {
  position: 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,

  bgcolor: 'background.paper',

  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

export default function ProductCard({ product }) {
  const {
    id,
    CarName,
    Image,
    Price,
    ExteriorColor,
    Status,
    priceSale,
    model,
    InteriorColor,
    Drivetrain,
    Transmission,
  } = product;
  const images = Image.split(',');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const openDataPage = (event) => {
    localStorage.setItem('CarName', CarName);
    localStorage.setItem('images', JSON.stringify(images));
    localStorage.setItem('Price', Price);
    localStorage.setItem('Status', Status);
    localStorage.setItem('model', model);
    localStorage.setItem('id', id);
    
    localStorage.setItem('details', JSON.stringify (product));
  };
  console.log('test',product.Transmission);
  return (
    <>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CarView image={images} CarName={CarName} Price={Price} />
        </Box>
      </Modal> */}
      <Card>
        <Box sx={{ pt: '100%', position: 'relative', cursor: 'pointer' }}>
          {Status === 'true' && (
            <Label
              variant="filled"
              color={(Status === 'true' && 'info') || 'error'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase',
              }}
            >
              {Status === 'true' && 'sale'}
            </Label>
          )}
          <NextLink href={'/car-info'} passHref>
            <ProductImgStyle alt={CarName} src={images[0]} onClick={openDataPage} />
          </NextLink>
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link to="#" color="inherit" underline="hover">
            <Typography variant="subtitle2" noWrap>
              {CarName}
            </Typography>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {/* <ColorPreview colors={colors} /> */}
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }}
              >
                {/* {priceSale && fCurrency(priceSale)} */}
              </Typography>
              &nbsp;
              {Price}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
