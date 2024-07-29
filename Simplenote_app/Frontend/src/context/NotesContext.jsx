import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/firebaseconfig';
import { collection, addDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');

  useEffect(() => {
    if (currentUser) {
      const q = query(notesCollectionRef, where('userId', '==', currentUser.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const notesData = [];
        querySnapshot.forEach((doc) => {
          notesData.push({ id: doc.id, ...doc.data() });
        });
        setNotes(notesData);
      });
      return unsubscribe;
    }
  }, [currentUser]);

  const addNote = async (note) => {
    try {
      await addDoc(notesCollectionRef, { ...note, userId: currentUser.uid, createdAt: new Date() });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const updateNote = async (note) => {
    try {
      const noteRef = doc(db, 'notes', note.id);
      await updateDoc(noteRef, { ...note, updatedAt: new Date() });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const noteRef = doc(db, 'notes', noteId);
      await deleteDoc(noteRef);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
