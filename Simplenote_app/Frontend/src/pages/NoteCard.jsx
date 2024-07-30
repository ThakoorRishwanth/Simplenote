import React from 'react';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const NoteCard = ({ note, onDelete, onEdit, isSidebar }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={4}
      bg={isSidebar ? "linear-gradient(to right, #2d3748 0%, #eff8ff 100%)" : "white"}
      boxShadow={isSidebar ? "none" : "lg"}
      border={isSidebar ? "none" : "2px"}
      borderColor={isSidebar ? "transparent" : "gray.800"}
    >
      <Text fontWeight="bold">{note.title}</Text>
      {isSidebar ? (
        <Text mt={2} isTruncated>{note.description}</Text>
      ) : (
        <>
          <Text mt={2}>{note.description}</Text>
          <Text fontSize="sm" mt={2} color="gray.500">Created by: {note.createdBy}</Text>
          <Text fontSize="sm" color="gray.500">Date: {new Date(note.createdAt).toLocaleString()}</Text>
        </>
      )}
      <Box mt={2}>
        <IconButton icon={<EditIcon />} size="sm" mr={2} onClick={() => onEdit(note)} />
        <IconButton icon={<DeleteIcon />} size="sm" onClick={() => onDelete(note.id)} />
      </Box>
    </Box>
  );
};

export default NoteCard;
