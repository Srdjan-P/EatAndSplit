import Friend from "./Friend";

export default function FriendsList({ friends }) {
  return (
    <div className="friends-list">
      {friends.map((friend) => (
        <ul key={friend.name}>
          <Friend friend={friend} />
        </ul>
      ))}
    </div>
  );
}
