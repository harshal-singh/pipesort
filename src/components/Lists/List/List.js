import "./List.css";

const List = ({ user }) => {
  return (
    <div className="List">
      <h1 className="User__id">{user.id}</h1>
      <div className="User__name">
        <h3>{user.name}</h3>
        <h4>@{user.username}</h4>
      </div>
    </div>
  );
};
export default List;
