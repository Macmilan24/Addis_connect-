import Card from "../../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product({ onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="w-full px-28 py-2 flex flex-wrap absolute z-10 bg-white pr-4"
    >
      <div className=" basis-1/4 h-30 flex flex-col pr-8 items-start">
        <div className=" flex flex-col w-full">
          <h3 className=" uppercase ml-2 text-base font-medium leading-3 mb-9">
            Platforms
          </h3>
          <hr className=" mb-9 border-y-yellow-400" />
        </div>
        <Card
          className="mb-14"
          cardInfo={{
            title: "Employee Engagement",
            des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
            icon: <FontAwesomeIcon icon="briefcase" />,
          }}
        />
        <Card
          className="mb-14"
          cardInfo={{
            title: "Employee Engagement",
            des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
            icon: <FontAwesomeIcon icon="briefcase" />,
          }}
        />
        <Card
          className="mb-14"
          cardInfo={{
            title: "Employee Engagement",
            des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
            icon: <FontAwesomeIcon icon="briefcase" />,
          }}
        />
      </div>
    </div>
  );
}
