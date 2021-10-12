import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import '../../Global.css';
import SavedNote from "../../models/SavedNote";

interface ViewAllProps {
}
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
    {notes.map((note) => {
      return <p>{note.title}</p>
    })}
    <main>
      <Link className="new-note" to={"/new"}>
        New Note
      </Link>
    </main>
  </>
}

export default ViewAll;