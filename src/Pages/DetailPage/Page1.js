import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Page1({ userData }) {

  const navigator = useNavigate();
  const handleHomePage = () => {
    navigator("/");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("src/db/data.json");
        setData(response.data);
      } catch (error) { console.error('error', error) }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Page1</h1>
      <button onClick={handleHomePage}>back to the Home</button>
      <body>
        {
          userData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.part}</td>
              <td>
                <img width="100px" src={data.image} alt={`User ${data.id}`} />
              </td>
            </tr>
          ))
        }
      </body>
    </div>
  );
}

export default Page1;