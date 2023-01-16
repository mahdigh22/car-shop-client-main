/* eslint-disable react/self-closing-comp */
/* eslint-disable  */
import { useState } from 'react';
// material
import { Menu, Button, MenuItem, Typography, Box } from '@mui/material';
import Iconify from 'src/components/Iconify';

// component

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  // { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];

export default function ShopProductSort(props) {
  const { handleHighLow, handleLowHigh, sort, handleNewest } = props;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box sx={{display:'flex',justifyContent:'flex-end'}}>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {sort}
        </Typography>
      </Button>
      <Menfu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === sort}
            onClick={
              option.label === 'Price: High-Low'
                ? handleHighLow
                : option.label === 'Price: Low-High'
                ? handleLowHigh
                : handleNewest
            }
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
