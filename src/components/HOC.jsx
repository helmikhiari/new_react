import { Children } from "react";

function HOC(Component) {
  return (
    <div style={{ border: "2px solid black" }}>
      <Component />
      
    </div>
  );
}

export default HOC;
