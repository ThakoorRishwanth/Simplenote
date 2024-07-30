import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import NoteEditor from '../components/NoteEditor';

const NoteModal = ({ isOpen, onClose, note, onSave }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{note ? 'Edit Note' : 'Add Note'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <NoteEditor note={note} onSave={onSave} onClose={onClose} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;
