import ActressCard from "./ActressCard";

function ActressesList({ actresses = [] }) {
  return (
    <div>
      {actresses.map((actress) => (
        <ActressCard key={actress.name} actress={actress} />
      ))}
    </div>
  );
}

export default ActressesList;
