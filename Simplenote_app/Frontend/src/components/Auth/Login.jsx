import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Box, Input, Button, VStack, Heading, useToast, Text } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast({
        title: "Login successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Failed to log in.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p="10" marginTop='100px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <VStack as="form" onSubmit={handleSubmit} spacing={4} width='30%' border='1px solid' p='10'>
        <Heading mb={4}>Login</Heading>
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
        <Button type="submit" colorScheme="teal">Login</Button>
        <Text cursor="pointer" onClick={() => navigate('/signup')}>
          New user? Sign up
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
