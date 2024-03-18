import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to="/">
      <button className="back_button" data_theme="light">&larr; &nbsp; Back</button>
    </Link>
  );
}

export default BackButton;
