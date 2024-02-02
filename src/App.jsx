import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    console.log(data[0].completed);
    setListData(data);
  };

  return (
    <div className="list-container">
      <div className="head">
        <h1>List of Data</h1>
        <div className="list-head">
          <span className="id">
            <b>Id</b>
          </span>
          <span className="title">
            <b>Title</b>
          </span>
          <span className="userId">
            <b>User Id</b>
          </span>
          <span className="completed">
            <b>Completed</b>
          </span>
        </div>
      </div>
      <div className="list">
        {listData?.map((item, key) => (
          <div key={key} className="list-wrapper">
            <span className="id">{item.id}</span>
            <span className="title">{item.title}</span>
            <span className="userId">{item.userId}</span>
            <span className="completed">{String(item.completed)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
