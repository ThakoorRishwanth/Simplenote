import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Flex, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Flex as="nav" p={4} bg="gray.900" color="white" justify="space-between" align="center">
      <Box fontWeight="bold" cursor="pointer" onClick={() => navigate('/')}>Daily Note App</Box>
      {currentUser ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
            {currentUser.email}
          </MenuButton>
          <MenuList>
            <MenuItem color='black'onClick={() => navigate('/profile')}>Profile</MenuItem>
            <MenuItem color='black' onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Box>
          <Button variant="link" mr={4} onClick={() => navigate('/login')}>Login</Button>
          <Button variant="link" onClick={() => navigate('/signup')}>Signup</Button>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
