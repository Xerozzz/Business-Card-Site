export default function Details({ name, role, company }) {
  return (
    <div className="details">
      <h1 className="companyrole">{name}</h1>
      <h2>{role}</h2>
      <h2>{company}</h2>
    </div>
  );
}
