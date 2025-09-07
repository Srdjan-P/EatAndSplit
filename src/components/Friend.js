export default function Friend({ friend }) {
  return (
    <li className="friend">
      <img src={friend.image} alt={friend.name} />
      <div className="friend-info">
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}

        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}€
          </p>
        )}

        {friend.balance == 0 && (
          <p className="">You and {friend.name} are even.</p>
        )}
      </div>
      <button>Select</button>
    </li>
  );
}
