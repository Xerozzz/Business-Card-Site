import Pic from "./Pic";
import Details from "./Details";
import Info from "./Info";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

export default function Profiles() {
  const { username } = useParams(); // Get the 'user' parameter from the URL
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(`http://localhost:8800/${username}`)
      .then((response) => response.json())
      .then((info) => setData(info[0]));
  }, [username]);

  return (
    <div>
      {!data ? (
        <Loading />
      ) : (
        <div className="profiles">
          <Pic picurl={data.picurl} />
          <Details name={data.name} role={data.role} company={data.company} />
          <Info email={data.email} phone={data.phone} />
        </div>
      )}
    </div>
  );
}
