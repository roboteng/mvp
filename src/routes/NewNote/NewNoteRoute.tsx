import Route from "../Route";
import NewNote from "./NewNote";

class NewNoteRoute implements Route {
  build() {
    return (
      <NewNote></NewNote>
    )
  }
}

export default NewNoteRoute;