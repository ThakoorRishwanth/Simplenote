import React from 'react';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const NoteCard = ({ note, onSelectNote, onDeleteNote, onUpdateNote }) => {
  return (
    <Box
      border="1px"
      borderRadius="md"
      p={4}
      cursor="pointer"
      bg="white"
      _hover={{ bg: "gray.100" }}
      mb={2}
    >
      <Flex justify="space-between" align="center">
        <Box onClick={() => onSelectNote(note)}>
          <Text fontWeight="bold" color="black">{note.title}</Text>
          <Text color="black">{note.content}</Text>
        </Box>
        <Flex>
          <IconButton
            icon={<EditIcon />}
            size="sm"
            mr={2}
            onClick={() => onUpdateNote(note)}
          />
          <IconButton
            icon={<DeleteIcon />}
            size="sm"
            onClick={() => onDeleteNote(note.id)}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NoteCard;
