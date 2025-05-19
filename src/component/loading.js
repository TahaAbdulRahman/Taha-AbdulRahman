import { Image } from "react-bootstrap";
import load from "../imgs/landing.gif";

const Loading = () => {
  return (
    <div className="loading">
      <div> 
        <Image className="image" src={load} />
      </div>
    </div>
  );
};

export default Loading;
