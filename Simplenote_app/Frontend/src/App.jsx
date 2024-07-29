// import React from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { NotesProvider } from './context/NotesContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import PrivateRoute from './components/Auth/privateRoute';
// import NotFound from './pages/NotFound';
// import { Box, Flex, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import './App.css';

// const Navbar = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate('/login');
//   };

//   return (
//     <Flex as="nav" p={4} bg="gray.900" color="white" justify="space-between" align="center">
//       <Box fontWeight="bold" cursor="pointer" onClick={() => navigate('/')}>Daily Note App</Box>
//       {currentUser ? (
//         <Menu>
//           <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
//             {currentUser.email}
//           </MenuButton>
//           <MenuList>
//             <MenuItem color="black" onClick={() => navigate('/profile')}>Profile</MenuItem>
//             <MenuItem color="black" onClick={handleLogout}>Logout</MenuItem>
//           </MenuList>
//         </Menu>
//       ) : (
//         <Box>
//           <Button variant="link" mr={4} onClick={() => navigate('/login')}>Login</Button>
//           <Button variant="link" onClick={() => navigate('/signup')}>Signup</Button>
//         </Box>
//       )}
//     </Flex>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <NotesProvider>
//         <Box>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Box>
//       </NotesProvider>
//     </AuthProvider>
//   );
// };

// export default App;

// import React from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { NotesProvider } from './context/NotesContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import PrivateRoute from './components/Auth/privateRoute';
// import NotFound from './pages/NotFound';
// import { Box, Flex, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import './App.css';

// const Navbar = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate('/login');
//   };

//   return (
//     <Flex as="nav" p={4} bg="gray.900" color="white" justify="space-between" align="center">
//       <Box fontWeight="bold" cursor="pointer" onClick={() => navigate('/')}>Daily Note App</Box>
//       {currentUser ? (
//         <Menu>
//           <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
//             {currentUser.email}
//           </MenuButton>
//           <MenuList>
//             <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </MenuList>
//         </Menu>
//       ) : (
//         <Box>
//           <Button variant="link" mr={4} onClick={() => navigate('/login')}>Login</Button>
//           <Button variant="link" onClick={() => navigate('/signup')}>Signup</Button>
//         </Box>
//       )}
//     </Flex>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <NotesProvider>
//         <Box>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Box>
//       </NotesProvider>
//     </AuthProvider>
//   );
// };

// export default App;


import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotesProvider } from './context/NotesContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/Auth/privateRoute';
import NotFound from './pages/NotFound';
import { Box, Flex, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Navbar from './components/Navbar';
import './App.css';

// Assuming that Navbar is already a separate component
const App = () => {
  return (
    <AuthProvider>
      <NotesProvider>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </NotesProvider>
    </AuthProvider>
  );
};

export default App;
