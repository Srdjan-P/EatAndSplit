import Friend from "./Friend";

export default function FriendsList({ initialFriends }) {
  return (
    <div className="friends-list">
      {initialFriends.map((friend) => (
        <ul key={friend.name}>
          <Friend friend={friend} />
        </ul>
      ))}
    </div>
  );
}
