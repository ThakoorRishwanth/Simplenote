import React, { useState } from 'react';
import { Box, Flex, IconButton, VStack } from '@chakra-ui/react';
import NoteCardList from '../pages/NoteCardList';
import NoteEditor from '../components/NoteEditor';
import { AddIcon } from '@chakra-ui/icons';
import { useNotes } from '../context/NotesContext';
import './Home.css';

const Home = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const { deleteNote, updateNote } = useNotes();

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setIsEditorOpen(true);
  };

  const handleAddNote = () => {
    setSelectedNote(null);
    setIsEditorOpen(true);
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  const handleUpdateNote = (note) => {
    setSelectedNote(note);
    setIsEditorOpen(true);
  };

  return (
    <Flex className="home" height="100vh">
      <Box className="sidebar" width={{ base: "100%", md: "25%" }} bg="gray.900" p={4}>
        <NoteCardList
          onSelectNote={handleSelectNote}
          onDeleteNote={handleDeleteNote}
          onUpdateNote={handleUpdateNote}
        />
        <IconButton
          icon={<AddIcon />}
          isRound
          size="lg"
          onClick={handleAddNote}
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="1"
        />
      </Box>
      <Box className="main" width={{ base: "100%", md: "75%" }} p={4}>
        {isEditorOpen && <NoteEditor note={selectedNote} />}
      </Box>
    </Flex>
  );
};

export default Home;
