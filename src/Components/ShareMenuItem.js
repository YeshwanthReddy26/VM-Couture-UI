import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { copyToClipboard } from '../Utils/BaseUtils';
import { useLocation } from "react-router-dom";

function ShareMenuItem({shareMenuItemAnchorEl,setShareMenuItemAnchorEl}) {
    const location = useLocation();
    const currentPath = location.pathname;
    const open = Boolean(shareMenuItemAnchorEl);

    const handleClose = () => {
        setShareMenuItemAnchorEl(null);
    };

    const handleCopyLinkClick = () => {
        const totalPath = "http://localhost:3000" + currentPath;
        copyToClipboard(totalPath)
        setShareMenuItemAnchorEl(null);
    };
    
    return (
            <Menu
                anchorEl={shareMenuItemAnchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleCopyLinkClick}>
                    <ListItemIcon>
                        <ContentCopyIcon fontSize="small" />
                    </ListItemIcon>
                    Copy Link
                </MenuItem>
            </Menu>
    );
}

export default ShareMenuItem;