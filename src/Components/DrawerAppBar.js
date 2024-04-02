import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CollectionsIcon from '@mui/icons-material/Collections';
import { ListItemIcon } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
    {
        text: "Home",
        icon: <HomeIcon />,
        path: "/",
    },
    {
        text: "New Picks",
        icon: <CollectionsIcon />,
        path: "/new-picks",
    },
    {
        text: "About Us",
        icon: <InfoIcon />,
        path: "/about-us",
    },
    {
        text: "Contact Us",
        icon: <ContactPhoneIcon />,
        path: "/contact-us",
    },
];

function DrawerAppBar(props) {
    const location = useLocation();
    const currentPath = location.pathname;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isExtraSmall = !useMediaQuery(theme.breakpoints.up('sm'));

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavbarButtonClick = (path) => {
        navigate(path);
    }

    const drawer = (
        <div onClick={handleDrawerToggle} style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
            <Typography variant="h6" sx={{ my: '12px', color: "white" }}>
                CompanyName
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton className="mobile-navbar-button" onClick={() => handleNavbarButtonClick(item.path)} sx={{ textAlign: "center" }}>
                            <ListItemIcon sx={{ color: "white" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div sx={{ display: "flex", backgroundColor: 'black' }}>
            <CssBaseline />
            {/* This will come into picture if the screen size is small or large */}
            <AppBar component="nav">
                <Toolbar sx={{ backgroundColor: "black", display: 'flex' }}>
                    {isExtraSmall ?
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        :
                        <>
                            <Typography
                                // variant="h6"
                                component="div"
                                sx={{ flex: 1, display: 'flex', alignItems: 'center', paddingLeft: '30px' }}
                            >
                                CompanyName
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                                {navItems.map((item) => (
                                    <Button onClick={() => handleNavbarButtonClick(item.path)}
                                        key={item.text}
                                        sx={{
                                            backgroundColor: 'black',
                                            color: currentPath === item.path ? '#ff8921' : 'white',
                                            paddingRight: "36px",
                                            fontSize: "13px"
                                        }}
                                        startIcon={item.icon}>
                                        {item.text}
                                    </Button>
                                ))}
                            </Box>
                        </>
                    }
                </Toolbar>
            </AppBar>
            {/* This will come into picture if the screen size is extra small */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 190,
                            backgroundColor: "black",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </div>
    );
}

export default DrawerAppBar;
