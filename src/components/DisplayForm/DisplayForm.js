export default function DisplayForm({
  name,
  bio,
  age,
  breed,
  image,
  message,
  upDog,
  handleSubmit,
}) {
  return (
    <div>
      <p>This is the edit page.</p>
      <p>{message}</p>
      <form>
        <div className="form-control">
          <label>Name: </label>
          <input
            placeholder="Enter name (required)"
            type="text"
            value={name}
            onChange={(e) => {
              upDog('name', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Description: </label>
          <textarea
            placeholder="Who is this dog?"
            type="text"
            value={bio}
            onChange={(e) => {
              upDog('bio', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Age: </label>
          <input
            placeholder="enter age in years"
            type="number"
            value={age}
            onChange={(e) => {
              upDog('age', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Image: </label>
          <input
            placeholder="enter URL"
            type="text"
            value={image}
            onChange={(e) => {
              upDog('image', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Breed: </label>
          <input
            placeholder="enter breed or mix"
            type="text"
            value={breed}
            onChange={(e) => {
              upDog('breed', e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  );
}
