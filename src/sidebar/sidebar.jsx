import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu,Mail,Inbox, Home, DollarSign, Package, Truck, HelpCircle, Repeat, Users, Bell, User, PhoneCall, Settings, ChevronRight, LogOut } from 'react-feather';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../assets/RSFP-logo.png";

const drawerWidth = 240;

function Sidebar({children}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [timer,setTimer] = React.useState(0);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  React.useEffect(()=>{
    const timerId = setInterval(()=>setTimer((prevVal)=>prevVal + 1),1000);
    return ()=>clearInterval(timerId);
  },[timer])


  const formatDate = (date) => {
    var months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    let formattedDate = day + ' ' + months[monthIndex] + ' ' + year;
    
    return formattedDate;
  }

  const formatTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return hours.toString().padStart(2,'0') + ':' + minutes.toString().padStart(2,'0') + ':' + seconds.toString().padStart(2,'0');
  }

  const menuItems = [{
    id:0,
    title:"Dashboard",
    icon:<Home size={20} />,
    route:'/dashboard',
    active:true,
  },{
    id:1,
    title:"Payments",
    icon:<DollarSign  size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:2,
    title:"Purchase Orders",
    icon:<Package size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:3,
    title:"Shipments",
    icon:<Truck size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:4,
    title:"Enquiry",
    icon:<HelpCircle size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:5,
    title:"Sorting",
    icon:<Repeat size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:6,
    title:"Users",
    icon:<User size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:7,
    title:"Notifications",
    icon:<Bell size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:8,
    title:"Community",
    icon:<Users size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:9,
    title:"Ticket Support",
    icon:<PhoneCall size={20}/>,
    route:'/dashboard',
    active:false,
  },{
    id:10,
    title:"Settings",
    icon:<Settings size={20}/>,
    route:'/dashboard',
    active:false,
  }]

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box display="flex" justifyContent='center' gap={1} py={2} alignItems="center">
            <img src={logo} style={{ width: "2rem" }} />
            <Typography variant="body1" fontSize={36} color="#399057">
              RSFP
            </Typography>
          </Box>
      <Divider sx={{ bgcolor: "white" }} />
      <List disablePadding>
        {menuItems.map((item, index) => (
          <>
          <ListItem sx={item.active ? {py:0,backgroundColor:'white'}:{py:0}} key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:'black'}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize:14}} primary={item.title} />
              <ChevronRight size={15}/>
            </ListItemButton>
          </ListItem>
          </>
        ))}
         <Divider sx={{mt:6,backgroundColor:'white'}}/>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:'black'}}>
               <LogOut/>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize:14}} primary="Logout" />
              <ChevronRight size={15}/>
            </ListItemButton>
          </ListItem>
          <Divider sx={{backgroundColor:'white'}} />
          <ListItem  disablePadding>
              <ListItemText primaryTypographyProps={{fontSize:9,pl:2}} primary="Powered by Rashail Infotech © 2022" />
              <Typography variant='caption' sx={{fontSize:9,pr:2}}>v 1.1.2</Typography>
          </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:'#399057',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Box display='flex' sx={{width:'100%'}} justifyContent='space-between'>
          <Typography variant="h6" color='white' noWrap component="div">
            Dashboard
          </Typography>
          <Box textAlign='right'>
            <Typography variant='body2' color='white' >Good Morning</Typography>
            <Typography variant='body2'  color='white' fontSize={12} >{formatDate(new Date)} - {formatTime()}</Typography>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#FDB92B' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#FDB92B',border:0 },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       {children}
      </Box>
    </Box>
  );
}


export default Sidebar;
