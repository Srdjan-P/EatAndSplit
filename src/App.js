import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 122136,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=122136",
    balance: -40,
  },
  {
    id: 129050,
    name: "John",
    image: "https://i.pravatar.cc/48?u=129050",
    balance: 120,
  },
  {
    id: 111136,
    name: "Anna",
    image: "https://i.pravatar.cc/48?u=111136",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} />
        <FormAddFriend />
      </div>
      <FormSplitBill />
    </div>
  );
}
