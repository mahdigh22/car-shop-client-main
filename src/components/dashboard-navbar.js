import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { AccountPopover } from './account-popover';

import NextLink from 'next/link';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { NavItem } from './nav-item';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));
const items = [
  {
    href: '/',
    icon: <ChartBarIcon fontSize="small" />,
    title: 'Home',
  },
  // {
  //   href: '/customers',
  //   icon: (<UsersIcon fontSize="small" />),
  //   title: 'Customers'
  // },
  {
    href: '/products',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Products',
  },
  {
    href: '/contactUs',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Contact Us',
  },
  {
    href: '/account',
    icon: <UserIcon fontSize="small" />,
    title: 'Account',
  },
  // {
  //   href: '/settings',
  //   icon: (<CogIcon fontSize="small" />),
  //   title: 'Settings'
  // },
  // {
  //   href: '/login',
  //   icon: (<LockIcon fontSize="small" />),
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: (<UserAddIcon fontSize="small" />),
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: (<XCircleIcon fontSize="small" />),
  //   title: 'Error'
  // }
];
export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <DashboardNavbarRoot {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          {/* <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton> */}
          {/* <Box sx={{ p: 1 }}>
        <NextLink
          href="/"
          passHref
        >
          <a>
           
          </a>
        </NextLink>
      </Box> */}
          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'flex',
              },
              flexGrow: { xs: 0, sm: 1 },
            }}
          >
            {content}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Avatar
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              ml: 1,
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};
const content = (
  <>
    {items.map((item) => (
      <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
    ))}
  </>
);
DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
