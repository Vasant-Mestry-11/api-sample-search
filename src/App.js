import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import { getUsers } from "./services/userServices";

const KEY = "username";

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [value, setValue] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    const newArray = users.filter((ele) =>
      ele[KEY].toLowerCase().includes(e.target.value)
    );
    setFilteredArray(newArray);
  };

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
        setFilteredArray(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Search value={value} handleChange={handleChange} />
      <Card
        data={value ? filteredArray : users}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
