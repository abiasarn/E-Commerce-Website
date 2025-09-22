const Navbar = () => {
  return (
    <>
      <nav className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <button className="bg-white h-12 w-12 rounded-full">
              <i className="bi bi-plus text-4xl"></i>
            </button>
          </div>
          <div>
            <a href="" className="text-2xl font-semibold">
              Brand
            </a>
          </div>
          <div>
            <button className="bg-white h-12 w-12 rounded-full">
              <i className="bi bi-cart text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
