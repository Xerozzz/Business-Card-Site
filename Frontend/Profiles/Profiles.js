import Pic from "./Pic";
import Details from "./Details";
import Info from "./Info";
import { useParams } from "react-router-dom";

export default function Profiles() {
  const { username } = useParams(); // Get the 'user' parameter from the URL

  return (
    <div className="profiles">
      <Pic />
      <Details />
      <Info />
    </div>
  );
}
