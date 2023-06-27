import { useState } from "react";
import { createTheme, ThemeProvider, styled, makeStyles, withStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333745',
    },
    secondary: {
      main: '#00CECB',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'yellow',
  }
}));

const ListItem = withStyles ({
  root: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    }
  },
  selected: {}
})(MuiListItem);

const Appbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const [ appbar, setAppbar ] = useState(false);

  const classes = useStyles();

  const handleAppbar = () => {
    setAppbar((prevState) => !prevState);
  };

  const drawer = (
      <Box>
        <StyledList>
          {navItems.map((item) => (
            <ListItem key={item}>
              <ListItemButton >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </StyledList>
      </Box>
  )
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              sx={{ display: { xs: 'block', sm: 'none' } }}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleAppbar}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={appbar}
            onClose={handleAppbar}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Appbar;