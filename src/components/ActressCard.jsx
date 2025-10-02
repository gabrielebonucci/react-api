function ActressCard({ actress }) {
  return (
    <div>
      <h2>{actress.name}</h2>

      <img src={actress.image} alt={`Foto di ${actress.name}`} />

      <p>Nazionalità: {actress.nationality}</p>
      <p>Anno di nascità: {actress.birth_year}</p>

      <h4>Biografia</h4>
      <p>{actress.biography}</p>
      <h4>Riconoscimenti:</h4>
      <p>{actress.awards}</p>
    </div>
  );
}

export default ActressCard;
