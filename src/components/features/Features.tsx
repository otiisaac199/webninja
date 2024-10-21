import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <div
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont"
    >
      <Title title="Features" desc="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
