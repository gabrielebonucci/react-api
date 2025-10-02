import ActressCard from "./ActressCard";

export default function ActressesList({ actresses = [] }) {
  if (actresses.length === 0) {
    return (
      <p>
        Nessuna attrice trovata. Controlla la risposta dell'API nella console.
      </p>
    );
  }

  return (
    <div className="actresses-list">
      {actresses.map((actress) => (
        <ActressCard key={actress.id} actress={actress} />
      ))}
    </div>
  );
}
