export default function DisplayDetail({ name, image, breed, age, bio }) {
  return (
    <div className="dog-detail">
      <h1>{name}</h1>
      <img src={image} />
      <h2>
        Meet {name}, the {breed}
      </h2>
      <h3>Age {age}.</h3>
      <p>{bio}</p>
    </div>
  );
}
