import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Favorite from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="secondary"
          noWrap
          sx={{ flexGrow: 1,fontWeight: "bold" }}
        >
          FREELY
        </Typography>

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

        <Button variant="contained" color="success">
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
