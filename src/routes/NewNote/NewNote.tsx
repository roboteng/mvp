import './NewNote.css';

export default function NewNote() {
  return (
    <>
      <div className="header">
        <h1>New Note</h1>
      </div>
      <main>
        <form>
          <label className="title field">
            <p>Title:</p>
            <input type="text"
            ></input>
          </label>
          <label className="contents field">
            <p>Contents:</p>
            <textarea
            ></textarea>
          </label>
        </form>
      </main>
    </>
  );
}