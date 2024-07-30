import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, Center } from '@chakra-ui/react';
import NoteCardList from './NoteCardList';
import NoteEditor from '../components/NoteEditor';
import { AddIcon } from '@chakra-ui/icons';
import { useNotes } from '../context/NotesContext';
import NoteModal from '../pages/NoteModal';
import './Home.css';

const Home = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const { notes, deleteNote, updateNote, addNote } = useNotes();

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

  const handleSaveNote = (note) => {
    if (note.id) {
      updateNote(note);
    } else {
      addNote(note);
    }
    setIsEditorOpen(false);
  };

  return (
    <Flex className="home" height="100vh">
      <Box className="sidebar" width={{ base: "100%", md: "25%" }} bg="gray.900" p={4}>
        <NoteCardList
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onUpdateNote={handleUpdateNote}
          isSidebar
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
        {notes.length === 0 ? (
          <Center height="100%">
            <Text fontSize="xl" color="gray.500" textAlign="center">
              No notes available. Click the plus icon to create a new note and get started.
            </Text>
          </Center>
        ) : (
          <NoteCardList
            notes={notes}
            onDeleteNote={handleDeleteNote}
            onUpdateNote={handleUpdateNote}
          />
        )}
      </Box>
      <NoteModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        note={selectedNote}
        onSave={handleSaveNote}
      />
    </Flex>
  );
};

export default Home;
