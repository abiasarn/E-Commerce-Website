const CategoryCard = (props) => {
  const { name, image, link } = props;

  return (
    <>
      <div className="relative h-40 w-full rounded-3xl overflow-hidden">
        <img src={image} alt="" className="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center">
          <p className="text-xl font-semibold text-white">{name}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
