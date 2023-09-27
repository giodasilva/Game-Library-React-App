import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { FaMapMarkedAlt } from "react-icons/fa";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertStatus, setAlertStatus] = useState(false);

  return (
    <div>
      <FaMapMarkedAlt size={40} color="blue" />
      <Button
        color="primary"
        onClick={() => {
          setAlertStatus(true);
        }}
      >
        Hello World
      </Button>
      {alertStatus && (
        <Alert
          onClose={() => {
            setAlertStatus(false);
          }}
          color="warning"
        >
          Hello <span>World</span>
        </Alert>
      )}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <LikeButton onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
