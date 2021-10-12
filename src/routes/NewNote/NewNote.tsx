import './NewNote.css';
import '../../Global.css';

interface NewNoteProps {
  title: string,
  contents: string,
  setTitle: (title: string) => void,
  setContents: (title: string) => void,
  submit: () => void,
}

export default function NewNote(props: NewNoteProps) {
  return (
    <>
      <div className="header">
        <h1>New Note</h1>
      </div>
      <main>
        <form>
          <label className="title field">
            <p>Title:</p>
            <input
              type="text"
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            ></input>
          </label>
          <label className="contents field">
            <p>Contents:</p>
            <textarea
              rows={20}
              value={props.contents}
              onChange={(e) => props.setContents(e.target.value)}
            ></textarea>
          </label>
          <button
          onChange={props.submit}
          >Save</button>
        </form>
      </main>
    </>
  );
}