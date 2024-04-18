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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import '../css/DrawerAppBar.css'
import { replaceSpaceWithHyphen } from "../Utils/BaseUtils";

import getUserCartDetails from "../Api/CartApis";

const userId = "Yeshwanth";

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
    const [isCartDrawerOpen, setIsCartDrawerOpen] = React.useState(false);
    const theme = useTheme();
    const isExtraSmall = !useMediaQuery(theme.breakpoints.up('sm'));

    const [cartDetails, setCartDetails] = React.useState([]);
    const [totalCartValue, setTotalCartValue] = React.useState(0);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavbarButtonClick = (path) => {
        navigate(path);
    }

    const closeCartDrawer = () => {
        setIsCartDrawerOpen(false);
    }

    const openCartDrawer = async () => {
        setIsCartDrawerOpen(true);

        const response = await getUserCartDetails({userId});
        setCartDetails(response.data);

        const totalValue = response.data.reduce((acc, item) => acc + parseInt(item.price), 0);
        setTotalCartValue(totalValue);
    }

    const handleCartItemImageClick = (name) => {
        navigate(replaceSpaceWithHyphen(name));
        setIsCartDrawerOpen(false);
    };

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
                            <ListItemText sx={{ textAlign: 'start' }} primary={item.text} />
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
                <Toolbar sx={{ backgroundColor: "black", display: 'flex', justifyContent: 'space-between' }}>
                    <>
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
                        <Button
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                paddingRight: "36px",
                                fontSize: "13px",
                                display: 'flex',
                                padding: '0px'
                            }}
                            startIcon={<ShoppingCartIcon />}
                            onClick={() => openCartDrawer()}
                        >
                            {cartDetails.length}
                        </Button>

                        {/* cart drawer */}
                        <Drawer
                            anchor={'right'}
                            open={isCartDrawerOpen}
                            onClose={closeCartDrawer}
                            sx={{ fontFamily: 'Cardo serif' }}
                        >
                            <div className="cart-drawer-div">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-13px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <ShoppingBagIcon sx={{ fontSize: '40px' }} />
                                        <h2>Your Cart</h2>
                                    </div>
                                    <div>
                                        <CloseIcon className="cart-close-icon" onClick={closeCartDrawer} />
                                    </div>
                                </div>
                                <hr className='horizontal-line' style={{ width: '95%' }} />

                                <div className="total-cart-details">
                                    <div>
                                        {cartDetails.map((item, index) => (
                                            <div className="cart-item" key={index}>
                                                <div>
                                                    <img
                                                        src={item.imageUrl}
                                                        alt="SelectedImage"
                                                        className="cart-item-image"
                                                        onClick={() => handleCartItemImageClick(item.name)}
                                                    />
                                                </div>
                                                <div>
                                                    <p onClick={() => handleCartItemImageClick(item.title)} className="cart-item-name">{item.title}</p>
                                                    <p className="cart-item-price">₹ {item.price}</p>
                                                    <div className="product-quantity-value">
                                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                        <a className="quantity-control-down quantity-control">-</a>
                                                        <input value={item.quantity} className="product-quantity-display" />
                                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                        <a className="quantity-control-up quantity-control">+</a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <CloseIcon className="cart-item-close" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <hr className='horizontal-line' style={{ width: '95%' }} />
                                        <div className="total-cart-value">
                                            <p>Total</p>
                                            <p>₹ {totalCartValue}</p>
                                        </div>

                                        <div className='cart-checkout-button'>
                                            <input type="submit" name="button" id="checkout-button" value="CHECKOUT" wk-skip="" />
                                        </div>

                                        <p style={{ fontSize: '12px', textAlign: 'center' }}>Shipping, taxes, and discount codes calculated at checkout.</p>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
                    </>
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
