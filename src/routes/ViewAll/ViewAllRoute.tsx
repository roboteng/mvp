import Route from "../Route";
import ViewAll from "./ViewAll";

class ViewAllRoute implements Route {
  build() {
    return (<ViewAll newNoteCallback={() => console.log('pressed')}/>);
  };
}

export default ViewAllRoute;