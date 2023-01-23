import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/userServices";
import ModuleCss from "./Card.module.css";

const Card = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
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
    <div className={ModuleCss.cards}>
      {loading && <>Loading...</>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {users &&
        users?.map(({ id, name, username, email, phone, company, website }) => {
          return (
            <div className={ModuleCss.cardContainer} key={id}>
              <p className={ModuleCss.name}>{name}</p>
              <p className={ModuleCss.username}>@ {username}</p>
              <p className={ModuleCss.email}>
                <i className="bx bxs-envelope"></i> {email}
              </p>
              <p className={ModuleCss.phone}>
                <i className="bx bxs-phone"></i> {phone}
              </p>
              <a
                target="_blank"
                className={ModuleCss.website}
                href={`http://${website}`}
                rel="noreferrer"
              >
                <i className="bx bx-globe"></i> {website}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
