import './NewNote.css';
import '../../Global.css';
import { useState } from 'react';
import Note from '../../models/Note';

interface NewNoteProps {
  saveNote: (note: Note) => void,
}

export default function NewNote(props: NewNoteProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  return (
    <>
      <div className="header">
        <h1>New Note</h1>
      </div>
      <main>
        <div>
          <label className="title field">
            <p>Title:</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <label className="contents field">
            <p>Contents:</p>
            <textarea
              rows={20}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button
            onClick={() => props.saveNote({ title, content })}
          >Save</button>
        </div>
      </main>
    </>
  );
}