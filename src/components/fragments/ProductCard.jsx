const ProductCard = (props) => {
  const { name, price, image, link } = props;
  return (
    <>
      <div className="bg-white w-40 rounded-2xl">
        <img src={image} alt={name} className="rounded-t-2xl" />
        <div className="flex justify-between items-center p-2 py-5">
          <div>
            <h3 className="text-base font-semibold">{name}</h3>
            <div className="">
              <p className="text-sm font-medium">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
