type TitleProps = {
  title: string;
  desc: string;
};

const Title = ({ title, desc }: TitleProps) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize">{desc}</h1>
    </div>
  );
};

export default Title;
