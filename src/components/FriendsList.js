import Friend from "./Friend";

export default function FriendsList({ initialFriends }) {
  return (
    <div className="friends-list">
      {initialFriends.map((friend) => (
        <ul>
          <Friend friend={friend} />
        </ul>
      ))}
    </div>
  );
}
