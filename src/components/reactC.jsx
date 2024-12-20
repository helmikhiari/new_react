import "./reactC.css";
import logo from "../logo.svg";

function ReactC({ children }) {
  const handleClick = () => {
    alert("Clicked");
  };

  return (
    <div className="container" onClick={handleClick}>
      {children}
    </div>
  );
}
export default ReactC;
