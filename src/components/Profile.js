import "./Profile.css";
export default function Profile(props) {
  return (
    <div className="profile">
      <img className="avatar" src={props.avatar} alt="" />
      <p>Name : {props.name}</p>
      <button className="like" count={props.count} onClick={props.handleClick}>
        like
      </button>
      <button
        className="like"
        count={props.count}
        onClick={props.handleClicktru}
      >
        huy
      </button>
    </div>
  );
}
