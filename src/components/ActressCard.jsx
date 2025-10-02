function ActressCard({ actress }) {
  return (
    <div className="container">
      <h1>{actress.name}</h1>

      <img
        className="actress-card"
        src={actress.image}
        alt={`Foto di ${actress.name}`}
      />

      <p className="details">Nazionalità: {actress.nationality}</p>
      <p>Anno di nascità: {actress.birth_year}</p>
      <div className="section">
        <h4>Biografia</h4>
        <p>{actress.biography}</p>
        <h4>Riconoscimenti:</h4>
        <p>{actress.awards}</p>
      </div>
    </div>
  );
}

export default ActressCard;
