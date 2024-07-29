// import React, { useEffect, useState } from 'react';
// import { Box, VStack, Text, Button, Flex } from '@chakra-ui/react';
// import { useNotes } from '../context/NotesContext';

// const NoteList = ({ onSelectNote }) => {
//   const { notes, deleteNote } = useNotes();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (notes) {
//       setLoading(false);
//     }
//   }, [notes]);

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <VStack spacing={4} align="stretch">
//       {notes.map((note) => (
//         <Flex key={note.id} justifyContent="space-between" alignItems="center" p={2} bg="gray.700" borderRadius="md" onClick={() => onSelectNote(note)}>
//           <Box>
//             <Text fontWeight="bold">{note.title}</Text>
//             <Text>{note.description}</Text>
//           </Box>
//           <Button size="xs" colorScheme="red" onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}>
//             Delete
//           </Button>
//         </Flex>
//       ))}
//     </VStack>
//   );
// };

// export default NoteList;


import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Button, Flex } from '@chakra-ui/react';
import { useNotes } from '../context/NotesContext';

const NoteList = ({ onSelectNote }) => {
  const { notes, deleteNote } = useNotes();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (notes) {
      setLoading(false);
    }
  }, [notes]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <VStack spacing={4} align="stretch">
      {notes.map((note) => (
        <Flex key={note.id} justifyContent="space-between" alignItems="center" p={2} bg="gray.700" borderRadius="md" onClick={() => onSelectNote(note)}>
          <Box>
            <Text fontWeight="bold">{note.title}</Text>
            <Text>{note.description}</Text>
          </Box>
          <Button size="xs" colorScheme="red" onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}>
            Delete
          </Button>
        </Flex>
      ))}
    </VStack>
  );
};

export default NoteList;
