export default function Friend({ friend }) {
  return (
    <li className="friend">
      <img src={friend.image} alt={friend.name} />
      <div className="friend-info">
        <h3>{friend.name}</h3>
        <p>{friend.balance}</p>
      </div>
      <button>Select</button>
    </li>
  );
}
