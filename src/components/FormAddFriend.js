export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <div className="space-between">
        <label>👫 Friend name</label>
        <input type="text" />
      </div>
      <div className="space-between">
        <label>👨‍🏫 Image URL</label>
        <input type="text" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
