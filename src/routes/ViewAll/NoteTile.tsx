import SavedNote from "../../models/SavedNote";

interface NoteTileProps {
  note: SavedNote,
}

function NoteTile(props: NoteTileProps) {
  return (
    <div id={props.note.id.toString()}>
      <p>{props.note.title}</p>
      <p>{props.note.content}</p>
    </div>
  )
}

export default NoteTile;