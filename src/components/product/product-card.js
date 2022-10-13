import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import {  Link,  Stack } from '@mui/material';
import Label from '../Label';

ProductCard.propTypes = {
  product: PropTypes.object,
};
export default function ProductCard({ product }) {
  const { CarName, imgsSrc, Price, colors, Status, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
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
        {/* <ProductImgStyle alt={CarName} src={imgsSrc} /> */}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" >
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
  );
}
