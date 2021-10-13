import Note from '../../models/Note';
import { useHistory, useParams } from 'react-router-dom';
import NoteEditor from './NoteEditor';
import { useEffect, useState } from 'react';
import SavedNote from '../../models/SavedNote';
import api from '../../api';

interface EditNoteProps {
  editNote: (id: number, note: Note) => void,
}

export default function EditNote(props: EditNoteProps) {
  const history = useHistory();
  const id = parseInt(useParams<{ id: string }>().id);

  const [note, setNote] = useState<SavedNote | null>(null);
  useEffect(() => {
    (async () => {
      const n = await api.getNote(id);
      setNote(n);
    })();
  }, [id]);

  return (
    note !== null
      ? <NoteEditor
        title="Edit Note"
        startingTitle={note.title}
        startingContent={note.content}
        onSave={(note) => {
          props.editNote(id, note);
          history.push("/");
        }}
      />
      : <></>
  );
}