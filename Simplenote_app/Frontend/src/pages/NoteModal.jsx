import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Textarea } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';

const NoteModal = ({ isOpen, onClose, note, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { currentUser } = useAuth();

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [note]);

  const handleSave = () => {
    const newNote = {
      id: note ? note.id : Date.now(),
      title,
      description,
      createdBy: currentUser.email,
      createdAt: new Date().toISOString(),
    };
    onSave(newNote);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{note ? 'Edit Note' : 'Add Note'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={3}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;
