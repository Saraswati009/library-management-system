import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar>
                {/* Logo Section */}
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" noWrap>
                        Digital Library
                    </Typography>
                </Box>

                {/* Search Section */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <InputBase
                        placeholder="Search…"
                        sx={{
                            padding: '6px 8px',
                            paddingLeft: '36px',
                            backgroundColor: '#ffffff',
                            borderRadius: '4px',
                            width: '100%',
                            maxWidth: '400px',
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton aria-label="search" sx={{ marginLeft: '8px' }}>
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* Login/Signup Section */}
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="inherit" onClick={handleLogin}>Login</Button>
                    <Button color="inherit" onClick={handleSignup}>Signup</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
