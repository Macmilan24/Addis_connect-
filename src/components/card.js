import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card({ cardInfo }) {
  return (
    <div className="flex cursor-pointer basis-1/3 mb-5 pr-5">
      <div className=" text-orange-400 text-2xl">{cardInfo.icon}</div>
      <div className="pl-2">
        <h3 className=" text-sm font-light mb-1">{cardInfo.title}</h3>
        <p className=" text-xs text-gray-500">{cardInfo.des}</p>
      </div>
    </div>
  );
}
