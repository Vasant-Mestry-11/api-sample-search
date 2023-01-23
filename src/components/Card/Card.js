import ModuleCss from "./Card.module.css";

const Card = ({ loading, data, error }) => {
  return (
    <div className={ModuleCss.cards}>
      {loading && (
        <div className={ModuleCss.loading}>
          <h1>Loading...</h1>
        </div>
      )}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data &&
        data.map(({ id, name, username, email, phone, website }) => {
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
