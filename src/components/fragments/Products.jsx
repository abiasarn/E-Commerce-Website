import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-center">Our Products</h2>
        <p className="text-base font-normal text-black opacity-50 text-center">
          Exclusive and premium.
        </p>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <ProductCard
            name="Air Jacket"
            price="$100"
            image="/Cyberpunk Neon Portrait.png"
            link=""
          />
          <ProductCard
            name="Air Jacket"
            price="$100"
            image="/Cyberpunk Neon Portrait.png"
            link=""
          />
          <ProductCard
            name="Air Jacket"
            price="$100"
            image="/Cyberpunk Neon Portrait.png"
            link=""
          />
          <ProductCard
            name="Air Jacket"
            price="$100"
            image="/Cyberpunk Neon Portrait.png"
            link=""
          />
        </div>
      </div>
    </>
  );
};

export default Products;
