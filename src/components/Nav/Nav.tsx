import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';
import useBombStats from '../../hooks/useBombStats';
import useBtcStats from '../../hooks/useBtcStats';
import useShareStats from '../../hooks/usetShareStats';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#e0e3bd',
    'background-color': '#121212',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: "Rubik",
    fontSize: '0px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#e0e3bd',
    fontSize: '14px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e0e3bd',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));



const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const bombStats = useBombStats();
  // const btcStats = useBtcStats();
  // const shareStats = useShareStats();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const btcPriceInDollars = useMemo(
  //   () => (bombStats ? Number(btcStats).toFixed(2) : null),
  //   [bombStats],
  // );
  // const bombPriceInDollars = useMemo(
  //   () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
  //   [bombStats],
  // );
  // const sharePriceInDollars = useMemo(
  //   () => (bombStats ? Number(shareStats.priceInDollars).toFixed(2) : null),
  //   [bombStats],
  // );
  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">Bomb Money</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                <img alt="bomb.money" src="/bomb-256.png" height="60px" />
              </Link>
              {/* <span className={classes.link}>BOMB: ${bombPriceInDollars} | BSHARE: ${sharePriceInDollars}</span> */}
             {/* <span className={classes.link}>BTC: ${btcPriceInDollars}</span> |  */}

            </Typography>
            <Box mr={5}>
     

              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/farm" className={classes.link}>
                Farm
              </Link>
              <Link color="textPrimary" to="/boardroom" className={classes.link}>
                Boardroom
              </Link>
              <Link color="textPrimary" to="/bond" className={classes.link}>
                Bond
              </Link>
              {/* <Link color="textPrimary" to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link color="textPrimary" to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link color="textPrimary" to="/regulations" className={classes.link}>
                Regulations
              </Link> */}
              <a href="https://docs.bomb.money" className={classes.link}>
                Docs
              </a>
            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              bomb.money
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Farm" to="/farm" />
                <ListItemLink primary="Boardroom" to="/boardroom" />
                <ListItemLink primary="Bond" to="/bond" />
                {/* <ListItemLink primary="SBS" to="/sbs" /> */}
                {/* <ListItemLink primary="Liquidity" to="/liquidity" /> */}
                {/* <ListItemLink primary="Regulations" to="/regulations" /> */}
                <ListItem button component="a" href="https://docs.bomb.money">
                  <ListItemText>Docs</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
