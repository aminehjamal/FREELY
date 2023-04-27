import * as React from 'react';
import { Link as ReactLink, useHistory } from 'react-router-dom';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Favorite from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { UserContext } from './UserContext'

function Header() {

  const { avatar, loggedIn, updateUser } = React.useContext( UserContext );

  const history = useHistory();
   function logout() {

    // Clear the data from disk
    localStorage.clear();

    // Reset the UserContext component
    updateUser({loggedIn: false})
    history.push('/');
  }

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        
        <Link component={ReactLink} 
        to="/" sx={{ flexGrow: 1,fontWeight: "bold", textDecoration: 'none' }}>
          <Typography     
          
            variant="h3"
            color="secondary"
            sx={{ fontFamily: 'Arial', fontWeight: 'bold', fontStyle: 'italic' }}
            noWrap
          >
            FREELY
          </Typography>
        </Link>
        <nav>
        <IconButton color="error" variant="h8" aria-label="favorite">
          <Favorite />
        </IconButton>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            My wishlist
          </Link>

          <IconButton disabled color="primary" variant="h10" aria-label="cart"></IconButton>
          <ShoppingCartOutlinedIcon />
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            My "free" cart
          </Link>

          <IconButton color="success" variant="h10" aria-label="chat"></IconButton>
          <ChatOutlinedIcon/>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            My chat
          </Link>
        </nav>

          {
            loggedIn !== true ?
              <Button
                component={ReactLink} 
                variant="contained" color="success"
                to={'/login'}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Log In
              </Button>
              :
              <Button
                onClick={logout}
                component={ReactLink} 
                variant="contained" color="success"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Log Out
              </Button>
            }
      </Toolbar>
    </AppBar>
  );
}

export default Header;
