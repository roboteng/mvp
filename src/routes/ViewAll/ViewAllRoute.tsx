import Route from "../Route";
import ViewAll from "./ViewAll";

class ViewAllRoute implements Route {
  newNoteCallback: () => void;
  constructor(newNoteCallback: () => void) {
    this.newNoteCallback = newNoteCallback;
  }
  build() {
    return (<ViewAll newNoteCallback={
      this.newNoteCallback
    } />);
  };
}

export default ViewAllRoute;