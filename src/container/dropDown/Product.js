import Card from "../../components/card";

export default function Product({ onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="w-full px-28 py-8 flex flex-wrap absolute z-10 bg-white"
    ></div>
  );
}
