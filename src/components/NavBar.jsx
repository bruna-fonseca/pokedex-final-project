import React, { useState, useContext } from 'react';
import { useHistory, Link } from "react-router-dom";

import ThemeContext from '../context/ThemeContext';
import Switch from 'react-switch';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import '../styles/NavBar.css';
import PokeballImg from '../assets/pokeball.png';


export default function NavBar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setGlobalTheme, globalTheme  } = useContext(ThemeContext);
  
  const handleTheme = () => {
    setGlobalTheme(globalTheme === 'light' ? 'dark' : 'light');
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toHome = () => {
    history.push('/');
  };

  const handleMenuClick = (url) => {
    history.push(url);
    setAnchorEl(null);
  };

  const BOX_STYLES = {
    backgroundColor: '#F2243A',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={ BOX_STYLES }>
          <img onClick={ toHome } className="pokeball" src={ PokeballImg } alt="pokebola logo"/>
          <Typography className="pointer" onClick={ toHome } variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>
            <div>
              {isMobile ? (
                <div>
                   <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={handleMenu}
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={ () => setAnchorEl(null) }
                  >
                    <MenuItem onClick={ () => handleMenuClick('/') }>Home</MenuItem>
                    <MenuItem onClick={ () => handleMenuClick('/geracoes') }>Gerações</MenuItem>
                    <MenuItem onClick={ () => handleMenuClick('/categorias') }>Categorias</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div>
                  <Link className="nav-links" to="/">Home</Link>
                  <Link className="nav-links" to="/geracoes">Gerações</Link>
                  <Link className="nav-links" to="/categorias">Categorias</Link>
                  <Link className="nav-links" to="/sobre">Sobre</Link>
                  <Switch
                    onChange={ handleTheme }
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checked={globalTheme === 'dark'}
                    height={15}
                    width={40}
                    handleDiameter={20}
                    offColor="#313131"
                    onColor="#313131"
                    onHandleColor="#E8CDCD"
                    offHandleColor="#E8CDCD"
                  />
                </div>
              )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
