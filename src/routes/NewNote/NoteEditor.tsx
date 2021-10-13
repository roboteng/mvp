import './NewNote.css';
import '../../Global.css';
import { useState } from "react";
import Note from "../../models/Note";

interface NoteEditorProps {
  title: string,
  startingTitle: string,
  startingContent: string,
  onSave: (note: Note) => void
}

function NoteEditor(props: NoteEditorProps) {
  const [title, setTitle] = useState<string>(props.startingTitle);
  const [content, setContent] = useState<string>(props.startingContent);
  return (
    <>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <main>
        <div>
          <label className="new-note-field">
            <p>Title:</p>
            <input
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <label className="new-note-field">
            <p>Content:</p>
            <textarea
              rows={20}
              className="input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button
            onClick={() => {
              props.onSave({ title, content });
            }}
          >Save</button>
        </div>
      </main>
    </>
  );
}

export default NoteEditor;
