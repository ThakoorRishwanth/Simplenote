import React from 'react';
import { useNotes } from '../context/NotesContext';
import NoteCard from './NoteCard';
import { VStack } from '@chakra-ui/react';

const NoteCardList = ({ onSelectNote, onDeleteNote, onUpdateNote }) => {
  const { notes } = useNotes();

  return (
    <VStack spacing={3} align="stretch">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onSelectNote={onSelectNote}
          onDeleteNote={onDeleteNote}
          onUpdateNote={onUpdateNote}
        />
      ))}
    </VStack>
  );
};

export default NoteCardList;
