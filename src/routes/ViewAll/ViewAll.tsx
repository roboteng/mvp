import { Link } from "react-router-dom";
import '../../Global.css';

interface ViewAllProps {
}
function ViewAll(props: ViewAllProps) {
  return <>
    <div className="header">
      <h1>All Notes</h1>
    </div>
    <main>
      <Link className="new-note" to={"/new"}>
        New Note
      </Link>
    </main>
  </>
}

export default ViewAll;