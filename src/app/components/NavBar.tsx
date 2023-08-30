"use client"

import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'
import Image from 'next/image'

const pages = ['Home', 'Projects', 'Resume'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nate Bollman
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    { page === "Home"
                      ? <Link href="/">{page}</Link>
                      : <Link href={page.toLowerCase()}>{page}</Link>
                    }
                    
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Typography textAlign="center">
                  <Link href="https://www.linkedin.com/in/nate-bollman/" target="_blank">LinkedIn</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nate Bollman
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page === "Home"
                  ? <Link href="/">{page}</Link>
                  : <Link href={page.toLowerCase()}>{page}</Link>
                }
              </Button>
            ))}
            
          </Box>
          <IconButton disableRipple="true" sx={{color: "white", padding: "0"}} href="https://www.linkedin.com/in/nate-bollman/" target="_blank">
            <LinkedInIcon sx={{ width: "2em", height: "2em", display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          </IconButton>
          {/* <LinkedInIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Link href="https://www.linkedin.com/in/nate-bollman/">
            <Image 
              
              src="/linkedin.png"
              width={75}
              height={75}
              alt="LinkedIn Logo"
            />
          </Link> */}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;