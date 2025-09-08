import Friend from "./Friend";

export default function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <div className="friends-list">
      {friends.map((friend) => (
        <ul key={friend.name}>
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        </ul>
      ))}
    </div>
  );
}
