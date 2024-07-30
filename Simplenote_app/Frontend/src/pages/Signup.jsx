import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Input, Button, VStack, Heading, useToast } from '@chakra-ui/react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      toast({
        title: "Account created.",
        description: "You have successfully signed up. Please log in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      toast({
        title: "Failed to sign up.",
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
        <Heading mb={4}>Signup</Heading>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button type="submit" colorScheme="teal">Signup</Button>
      </VStack>
    </Box>
  );
};

export default Signup;
