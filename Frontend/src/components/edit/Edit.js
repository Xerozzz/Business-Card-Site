import { useParams } from "react-router-dom";
import Loading from "../Loading";
import React from "react";
import Pic from "../profiles/Pic";
import Form from "./Form";

export default function Edit() {
  const [data, setData] = React.useState(null);
  const { username } = useParams(); // Get the 'user' parameter from the URL

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
          <Form data={data} />
        </div>
      )}
    </div>
  );
}
