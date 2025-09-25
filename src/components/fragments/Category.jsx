import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Explore by category</h2>
        <div className="flex flex-col gap-10 mt-10 md:flex-row">
          <CategoryCard
            name="Women"
            image="/Color-Blocked Jacket Close-Up.png"
            link=""
          />
          <CategoryCard name="Men" image="/Man in Mustard Outfit.png" link="" />
          <CategoryCard
            name="Sports"
            image="/Winter Sports Enthusiast.png"
            link=""
          />
        </div>
      </div>
    </>
  );
};

export default Category;
