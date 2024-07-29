// import React, { useState, useEffect } from 'react';
// import { Box, Button, Input, Textarea, VStack } from '@chakra-ui/react';
// import { useNotes } from '../context/NotesContext';

// const NoteEditor = ({ note }) => {
//   const { addNote, updateNote } = useNotes();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     if (note) {
//       setTitle(note.title);
//       setDescription(note.description);
//     } else {
//       setTitle('');
//       setDescription('');
//     }
//   }, [note]);

//   const handleSave = async () => {
//     if (note) {
//       await updateNote({ ...note, title, description });
//     } else {
//       await addNote({ title, description });
//     }
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <VStack spacing={4} align="stretch">
//       <Input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <Textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <Button colorScheme="teal" onClick={handleSave}>
//         Save
//       </Button>
//     </VStack>
//   );
// };

// export default NoteEditor;


import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Textarea, VStack } from '@chakra-ui/react';
import { useNotes } from '../context/NotesContext';

const NoteEditor = ({ note, onSave }) => {
  const { addNote, updateNote } = useNotes();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [note]);

  const handleSave = async () => {
    if (note) {
      await updateNote({ ...note, title, description });
    } else {
      await addNote({ title, description });
    }
    setTitle('');
    setDescription('');
    onSave();
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input
        placeholder="Enter note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Enter note description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleSave}>
        Save
      </Button>
    </VStack>
  );
};

export default NoteEditor;
