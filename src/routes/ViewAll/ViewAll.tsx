interface ViewAllProps {
  newNoteCallback: () => void,
}
function ViewAll(props: ViewAllProps) {
  return <>
    <div className="header">
      <h1>All Notes</h1>
    </div>
    <button className="new-note" onClick={props.newNoteCallback}>
      New Note
    </button>
  </>
}

export default ViewAll;