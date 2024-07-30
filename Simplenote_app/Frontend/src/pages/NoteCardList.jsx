import React from 'react';
import { VStack } from '@chakra-ui/react';
import NoteCard from './NoteCard';

const NoteCardList = ({ notes, onDeleteNote, onUpdateNote, isSidebar }) => {
  return (
    <VStack spacing={4} align="stretch">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDeleteNote}
          onEdit={onUpdateNote}
          isSidebar={isSidebar}
        />
      ))}
    </VStack>
  );
};

export default NoteCardList;
