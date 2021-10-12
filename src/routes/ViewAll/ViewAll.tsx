import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import '../../Global.css';
import SavedNote from "../../models/SavedNote";
import NoteTile from "./NoteTile";

interface ViewAllProps { }

function ViewAll(props: ViewAllProps) {
  const [notes, setNotes] = useState<SavedNote[]>([]);
  useEffect(() => {
    (async () => {
      const notes = await api.getNotes();
      setNotes(notes);
    })();
  }, []);
  return <>
    <div className="header">
      <h1>All Notes</h1>
    </div>
    <main>
      {notes.map((note) => {
        return <NoteTile note={note}/>
      })}
      <Link className="new-note" to={"/new"}>
        New Note
      </Link>
    </main>
  </>
}

export default ViewAll;