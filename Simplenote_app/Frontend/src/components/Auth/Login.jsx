import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Box, Input, Button, VStack, Heading, Text } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNewUser) {
        await signup(email, password, name);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  return (
    <Box p="10" marginTop="100px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack as="form" onSubmit={handleSubmit} spacing={4} width="30%" border="1px solid" p="10">
        <Heading mb={4}>{isNewUser ? 'Sign Up' : 'Login'}</Heading>
        {isNewUser && (
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" colorScheme="teal">
          {isNewUser ? 'Sign Up' : 'Login'}
        </Button>
        <Text cursor="pointer" onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? 'Already have an account? Login' : 'New user? Sign Up'}
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
