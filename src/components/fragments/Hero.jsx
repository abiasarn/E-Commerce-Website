const Hero = () => {
  return (
    <>
      <div className="bg-white w-full rounded-3xl p-5 md:w-[50%] lg:w-[50%] lg:p-10">
        <div>
          <h1 className="text-3xl font-semibold">Exclusive Jackets Are Here</h1>
          <p className="text-base font-normal text-black opacity-50 mt-7">
            Lorem ipsum dolor sit amet consectetur. Netus eget neque lacus
            consequat a fusce eleifend.
          </p>
          <div className="flex items-center mt-7">
            <button className="bg-black h-10 px-3 rounded-full text-base font-bold text-white">
              Shop Now
            </button>
            <i className="bi bi-arrow-up-right-circle-fill text-[42px]"></i>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div>
            <p className="text-xl font-semibold">1 Million+</p>
            <p className="text-base font-normal text-black opacity-50">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="w-36">
            <div className="relative w-full">
              <img
                src="/Contemplative Side Profile.png"
                alt=""
                className="absolute border-3 border-gray-300 h-10 w-10 rounded-full"
              />
              <img
                src="/Contemplative Side Profile.png"
                alt=""
                className="absolute right-9 z-1 border-3 border-gray-300 h-10 w-10 rounded-full"
              />
              <img
                src="/Contemplative Side Profile.png"
                alt=""
                className="absolute right-18 z-2 border-3 border-gray-300 h-10 w-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
