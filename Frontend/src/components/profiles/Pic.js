export default function Pic({ picurl }) {
  return (
    <div className="profilepic">
      <img
        className="picture"
        alt="profilepic"
        src={`${process.env.PUBLIC_URL}/profilepics/${picurl}`}
      />
    </div>
  );
}
