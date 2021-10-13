import './NoteTile.css';
import SavedNote from "../../models/SavedNote";
import { useState } from 'react';

interface NoteTileProps {
  note: SavedNote,
  deleteCallback: () => void,
}

function NoteTile(props: NoteTileProps) {
  const [showDelete, changeShowDelete] = useState(false);
  return (
    <div id={props.note.id.toString()}
      className="note-tile"
      onMouseEnter={() => changeShowDelete(true)}
      onMouseLeave={() => changeShowDelete(false)}
    >
      <div>
        <p className="note-tile-title">{props.note.title}</p>
        <p className="note-tile-content">{props.note.content}</p>
      </div>
      {showDelete
        ? <button onClick={props.deleteCallback}>Delete</button>
        : null}
    </div>
  )
}

export default NoteTile;