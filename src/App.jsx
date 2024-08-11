import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Card from "./card/Card";
import "./_App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Card
          itemName={"Godwin"}
          itemDescription={"sold stock"}
          itemImage={
            "https://waziri.ng/wp-content/uploads/2023/12/images-2023-03-17T191419.855.jpeg"
          }
        />
      </div>
    </div>
  );
}

export default App;
