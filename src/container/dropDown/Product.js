import Card from "../../components/card";

export default function Product({ onHover, onLeave }) {
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave} className="w-full">
      <Card />
    </div>
  );
}
