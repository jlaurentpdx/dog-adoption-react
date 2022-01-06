export default function DisplayForm({ name, upDog, handleSubmit }) {
  return (
    <div>
      <p>This is the edit page.</p>
      <form>
        <label>Name: </label>
        <input
          placeholder="enter name (required)"
          type="text"
          name="Name: "
          value={name}
          onChange={(e) => {
            upDog('name', e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
