import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ClickAwayListener } from '@mui/material';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const listItems = [
    { text: 'Inbox', Icon: InboxIcon },
    { text: 'Starred', Icon: MailIcon },
    { text: 'Send email', Icon: InboxIcon },
    { text: 'Drafts', Icon: MailIcon }
  ];
  return (
    <Box /* sx={{ display: 'flex'}} */>
      <AppBar position="fixed" className="bg-white text-slate-800">
        <Toolbar className="flex justify-between">
          <div className="flex">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  width: '3rem'
                },
                open && { display: 'none' }
              ]}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <img src={logo} alt="logo" className="object-contain h-12" />
            </div>
          </div>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        // variant="persistent"
        anchor="left"
        open={open}
      >
        <ClickAwayListener
          onClickAway={() => {
            handleDrawerClose();
          }}
        >
          <div>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="logo" className="object-contain h-12" />
            </DrawerHeader>
            <Divider />
            <List>
              {listItems.map(({ text, Icon }, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </ClickAwayListener>
      </Drawer>
    </Box>
  );
}

const logo =
  'data:image/webp;base64,UklGRmoOAABXRUJQVlA4IF4OAACQQwCdASpeAYoAPpFCnUqlo6yiJjNqSZASCU3cLbS9y0RjdpmDxGvTt91xRJ+LZ3ow/RXsAc8PzCebj/vPVx/ifUA/pfUZehb+zPp1+zJ/c/+5lBXob/Aduv+i6Xz0FMj8CdSn5L9tv2vmz3/8AL8g/l3+l3wMAf1Y4jtJNoB+J5ny+vPYO/X3/m9ir0gCm6zBE8ZQWmUxGWs4PNp+B23OTroAZGrf/71OmsHrLCwUjct4p1tzAJSHzf//NY4Hoc7kwZnS2Ntx46O4wcGGK377A3x+VwwB3dkf42L9lb7tgdSERuGr78ymFHX0nGuY+jtRu25ydesPwIk0PcijHD0QMB+ghwOfhR1znIdMNlLfyve/cxdPiPrjrY7o7wdlxnf0xPpVLjTt51/NKKBQuGG2LIV4gY6sLv9hH8TsODE7IMWTzOVXtM14VkIgRxebzZ102/cuMX36REtu4zVcENiqKoBlO3b36hqXy/G0f794rXetLPU3KW2wZSc9CW+5BlqgBFPD4gq2ySw1Fp2LX8U3v2ewBmzD1eKI4N74NSCRvZrANuFtcFzkq5N7ZcEHw3g4l/eJdSYefB2oMvvAWMFIPhwZpD8x6yhWaxmPpF7CAL4NeoqtSTdKzum11hYduEfjwlLLP4rbH/OCCKkMiNBw7Tk/j9ntUTX1S0+0fW0KIb+Nz6bWcgfgeDzcUsjiB2ttQjmLNvyNtzk69jbc5OvY5T5tPmAA/v5ug2fNV1n5gzA4shDyt280KlDNZTR+4RlxDs0BnUBWCNwAAYx677E7mJQ5hQp8NliNRHftn/AVJbG48wTsIfVvpUs1iJbFF90l9uNZ+JYQYAnb+FPaKX2WqIzzsVRFxBHwwqBQhERA/P7uRVYNbKFUrWNGQkM2ZW929bI6WShl8ZX8C5IJ1zu8N91sSUFI1kdz5mgZ4TTXZySDaNv7r35vn5voQO+Jq+Oek4iYrsW+1makm5s/FfCHgZwNE2P8KjbY3OaxhhRTnKCT4vXy9wm/n64E+lb7Fy9D3N3dF10k1XHHl41RnuGlxzd0FycvU8Ngnw4sEABVSz7fftUkQL+JOROHaGo6h8SkcImEGNwz0shSDNmvUMkhV1UZqugTgDuCaGFDI4CqPtLEJoPmv9nmBJej/DNf7B2QIIXsABh9WAL4NDPr/LuPTL5p8wAvYxWirYr5C/oTOfcOWAv/A6eSPGSIiit9BOHJpCRJLn4ToLSHFrwk4o75jF8FWZ/tIaGTKF7a6EwtixoGpAQ1fvZTG4oKTYlhkhLV9brZ1/8mGoeUqjJKdZApftge/77Lv5Q4Msma9JHkknQEN7kp3wLR6k4upOkHkaQxdY6D5iKYGQIqVkd/cixPrl7wDO41FmuMUu8VGYoFFcIMCkVJM2tymGhD9DFQtmaxp3pa5gfxWgjQPwbSyBd0HynDf6j/yASk3EAt2ZBtt7CUgFdFYlt6KhepFcSR5TAPcXbdsUzrrxQP4NmfhBn8QjhBcguXxn4qrWDwtTmDj8lkuBSD7XntxUjlYY1hh0Ea0IfNacQTWImq8NvkaNBY89kpa3Xr4kAz2iDaV7YEsoBXbYR4WzuhHiUdVtIPYheIeuRk/XwduGOrfgbHjWVKXXfGxhMvcbo4xfQmgYmst5wHKfPAPT5AYBRxbcQK2kKvjJndXW6ssGRfCszrx0hK+DfDOY5i9+pXVVjEfP/5SyIE344FXhIF/zwU/vUz91enKgLqacDjBN6667zATPs9JU0rzI55O/mVU+q7ERGD1yS7rygaLgAO/Dq7mj7K02XO/8z/lh3trJtFr6i3EdRnTJL+tZrLMeqLnClfQYvgdWTpP7iKysjBCUEC76dyk9RMtD4ee636AfxYpXj5uRnGTSdnikvs/qfIFDW/VdXLcu+9o/qMlKxCWxsSkNmiAOQJqAbMXCRlZlycwEGiJqfYruSWYXqLHmCk2isQX4tisSp4uwi0OYot9+AnPIRx33dJk/yvGGyjyzMlJYxu5xmqe1A8Zf0xI1HDzkJahjcDcqOaqaQsnV1tMD2r4NVFuC5bIFxQd9B8+D1alrghPqBHXyfN2xNHSRCT18VMkZGhvTM+r4gWsCBMEtCNYnbquIBPmEgMOz/QMuJumH5Aizm5jd563V7J1jx9jGMewPHujtOqDdK5qIjSscDdOwSG05LR9macTRM4xcp2n/AS7SvhTx3xXyMHbbPqJLbanmGrikPMbFjgeHA1T+e3rSL1AfaeRGCaloHFA52rBR4pl/cF9LoDvk6Z6Y4u8f83Vk5ANMFRlIFnbIoe4RMxXwWdQvktflc3XsUBcYHc4F9yaGcvG913FzDzoXUwFAhF+MP3tHUY91ondBTjghJHRci9h1MxT6rH2yJAIfpq9v+vabINQYYfwxSb+WYQZr6jVRVE9ewbRElhEL2u1NfvyMV8MNSJ2Jq2cXKAFZrTwrccNhH9jt0DTENlq5m0lLTrk2AdFp0DmNj7cnZWAzHoTqxE/s8GcGP/qpMVzqFdj8eWoOSsIBvP8vGy0Gxk/ySF9v6WIX45sg77zF2eovF2ELmve7acO5d4UoXWR/6yOrmFeIDJjLU789msHDLWkHkXc2fwyHwYrpDNgWP4p8aC5JzLiFoL6z6TCEDDTQA7V7+b9NWcANXQ3sN5ufv8g1UR91FzIwQNl0ryxAw0rxD6IK9s1pEjbMUD7PYF+b11wXlGcqxbxre3HS9BsN/r3pLYwrugoaugl0Sj9dJAh5xdQzGHBMQi8an+Ga32zLnc5FYiYFKPiVxjAvsP4nNuSy3X8Wnn7jbwcpy9rmUTzVNZHXGsmdI+dHAz7sSwXMpm4ybKUCtqZ2fSl6CDcSevlzDNXycwlvg+n/b2PFXXNjkSMXEYr60SXJtT/ZcOsJg6ReCcCmuIZBI3XQvbIGfHtN/F4dEnGGvoqmkbFrEqLHpWg5md2eE5KGltlMBpy4wNtFYY3VppbRflZgl2ErSpadVI1C3WqazVX1RbApNTqe6PUgSrqF4oh/H2jNZtqFK2bSOQTJnw+MgrfBdO9DZeaD5yawZisIfRDjadoeWg7JHqllYT4CEfhzXRemw0jJNoLCRryUVXETSTVbi4ABp0brdquLI4ijIoioB7qM3SdisqMZidDACaf4DrRUP5yEcXg42h4eBVAlbAThBgjDVXI+2wStx+nK5NXu+0GkikEdE7fGj8t+E6gyS1fioCPAgH1ovotAjFqW33At4O2koudoNe+krtxCR9Mh8U8iw31An+yBoPVNsi+qfn/yOofvy1hyZqdHFFMjIFkY2QVt0VI96tR3KKH9bUODLu7pPUuWlYf9VdtBG61XNVLlKFqbvniq+ihP5LpwmmdP+HAr4BwhpUlLeGpUzHFTbOFFLmeMLyXrMWZfN5sxsK2aJuXpY1QRD2zwL1ySZ/wCrxP+L3HOBUxvR4yuu8mm/sfy3axG3R0toPXLgNdAjYUJhVIX4HFlkpDoNVTZMffQhnz1dVRkapvxJrf2PiAjZLfTrAymRDGw3ZnCIt5AndsbnNl5AKq9Xm+0DQh1knts8Pp8kqSIu2abDgZ+DzKGsdRRBv0CwsvMLeDHnYaUGes8cZuvZDCPFLSSvShH40wrZ/jMb4STVgHXmuyvwyhsaByAHBbix1ObxQGKVTWzYRcf+iQNr1/Z9yhx+4GWoKeSl6XkiG4GpYDIqDj/hfabaYB+jf+G93cWx2xEZUIdUCiF+iUIXj6uWH/UlXvZX/cEW/hPsgQ1Tl/0bBeBUIQqjlZN7HbwxPJsydmmtg7eZZfFExiEKk/sLGDiNxyTxFcJFdyFpk9mSKxataBvyBLTPn2jdjPPrkcLUdxfBu7ItBw/iZ9t8ER5WZ+qUu2bvIN6A4d9Xq/5VHpHj7k8ChvQGrE7LuBRewNaTSCcRlyy6Cnf6blXM3pM7WMDKlRDtdS4SCtymz8haVVIS23MHOFUf4f+l5pAMwZxEm5XBXlNiVkawvqS4WLEDIlhSAipT991HOz/VA0Lpjr9lnuT5wsR+evj6jof76iZLmLDgqHmU9g+C03NZnxfM/R1YzsptzYr1AesTHIamyIl4lWkSHDI8acCRsGe1Oc3PaFu/y8NGxKKZEHIH8vzB5C/Nc0+waeSURxuwdkRKAs18eL8K3Og78gEtR2aZnXDi6GGoZSov+DX9mO4PnvhZo9dusvCgXYtdAKIbRXXcbmHc58lG8QiV5l4SWMuLZSSwBCkinvXaKpl3h1Yxba8DxTzu+5jwWL2X0yXAxqAUwK5uuX8g1l7iXEZLX5tvIoq1KgITvhZvCFopbQu4JgE4ZOi6AI1fCH8ZD3B3YXhJ84taYO5uHKZgv3L7U9muZobLqziMvCli6/CO+80FbbkfTPVpsqkAWD3HH2mOrUY6fp2SluhI5NVjVsTTXQZLd3Gc6Sqnb/QKzaAJ4vsKF9OR5aCYKrwQwUf4o7lnxs8YKiDurwVqtTus5TM19LDIXLstjxvQDL6fTA9pEJEl7797C/tXZaaAvyAsai6blrZXoUfU/Ge3kSUr9xVEc3vq2rnu9mJVVaX7fnx80DfOwlsD+BMATgfgPMx3xmg1T5M7p7/ThAY3nCcpD4NjB97rmjpJU6lcnC1HUKY8Xj2ZWHjOccSG/2bAF/8zd7oUlwGmuVOsA98ApGKcyGucda/Axx2GQSh5I3cVGVi9XhAjO+Kc5f52nhuwyc9sHU78C8NPQNeeoPtEilDXL4MNo+IE545GQ/lNqwuWOxDZdxz1qv8RZj3zmYK4xn0eAnY3FItjz3FHP3LObJg4UQWngryCHUeEMOEDiRTODIxbcFthtwEHtQngOlgUAAAAADOSmttQvqd6/H+AfCw7oI3ctec8Q/ZI1Qd/Buos5BVob0EvsVI9sA4xDBtc1XatUwAAAAAAAAAA=';
