export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH X</h2>

      <div className="space-between">
        <label>💰 Bill Value</label>
        <input type="text" />
      </div>

      <div className="space-between">
        <label>💸 Your expense</label>
        <input type="text" />
      </div>

      <div className="space-between">
        <label>👫 X's expense</label>
        <input type="text" disabled />
      </div>

      <div className="space-between">
        <label>🤑 Who is paying the bill?</label>
        <select>
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
      </div>
      <button>Split Bill</button>
    </form>
  );
}
