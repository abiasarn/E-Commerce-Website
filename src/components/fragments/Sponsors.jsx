import Sponsor from "../elements/Sponsor";

const Sponsors = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-7 md:gap-16 lg:gap-20">
        <Sponsor name="Brand" logo="/Brand1.png" link="" />
        <Sponsor name="Brand" logo="/Brand2.png" link="" />
        <Sponsor name="Brand" logo="/Brand3.png" link="" />
        <Sponsor name="Brand" logo="/Brand4.png" link="" />
      </div>
    </>
  );
};

export default Sponsors;
