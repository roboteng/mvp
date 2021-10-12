import { Link } from "react-router-dom";

interface ViewAllProps {
}
function ViewAll(props: ViewAllProps) {
  return <>
    <div className="header">
      <h1>All Notes</h1>
    </div>
    <Link className="new-note"  to={"/new"}>
      New Note
    </Link>
  </>
}

export default ViewAll;