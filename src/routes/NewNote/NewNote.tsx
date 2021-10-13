import Note from '../../models/Note';
import { useHistory } from 'react-router-dom';
import NoteEditor from './NoteEditor';

interface NewNoteProps {
  saveNote: (note: Note) => void,
}

export default function NewNote(props: NewNoteProps) {
  const history = useHistory();
  return (
    <NoteEditor
      title="New Note"
      startingTitle=""
      startingContent=""
      onSave={(note) => {
        props.saveNote(note);
        history.push("/");
      }}
    />
  );
}