import Social from "../elements/Social";
import Link from "../elements/Link";

const Footer = () => {
  return (
    <>
      <div className="bg-white p-6 py-10 rounded-2xl">
        <div>
          <h5 className="text-xl font-semibold">Brand</h5>
          <p className="text-base font-normal opacity-50">
            Exclusive jacket are here.
          </p>
          <div className="flex gap-5 mt-10">
            <Social icon="bi bi-instagram" link="" />
            <Social icon="bi bi-facebook" link="" />
            <Social icon="bi bi-tiktok" link="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">About</p>
            <Link to="" name="Brand" color="text-black" />
            <Link to="" name="Founder" color="text-black" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Help</p>
            <Link to="" name="FAQ" color="text-black" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Shortcuts</p>
            <Link to="" name="Home" color="text-black" />
            <Link to="" name="About" color="text-black" />
            <Link to="" name="Products" color="text-black" />
            <Link to="" name="Contacts" color="text-black" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Category</p>
            <Link to="" name="Men" color="text-black" />
            <Link to="" name="Women" color="text-black" />
            <Link to="" name="Sports" color="text-black" />
            <Link to="" name="Summer" color="text-black" />
          </div>
        </div>
        <div className="border-t border-gray-200 h-20 flex justify-start items-center mt-10">
          <p className="text-sm font-normal opacity-50">
            Copyright 2025 Brand. All Rights Reserved.
          </p>
        </div>

        {/* <div>
            <div>
                <p>About</p>
                <a href="">Brand</a>
            </div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
