import { useEffect, useState } from "react";
import ModuleCss from "./App.module.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import { getUsers } from "./services/userServices";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [value, setValue] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const [key, setKey] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    const newArray = users.filter((ele) =>
      String(ele[key]).toLowerCase().includes(e.target.value)
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

  const generateOptions = () => Object.keys(users[0]);

  const isDisabled = () => {
    return !key ? true : key === "Select" ? true : false;
  };

  return (
    <div className="App">
      {users.length && (
        <select
          className={ModuleCss.select}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        >
          <option className={ModuleCss.option}>Select</option>
          {generateOptions().map((option) => (
            <option key={option} className={ModuleCss.option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <Search
        value={value}
        handleChange={handleChange}
        disabled={isDisabled()}
      />
      <Card
        data={value ? filteredArray : users}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
