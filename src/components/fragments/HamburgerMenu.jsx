import MenuCard from "../elements/MenuCard";
import Link from "../elements/Link";
import Social from "../elements/Social";

const HamburgerMenu = () => {
  return (
    <>
      <MenuCard>
        <ul className="flex flex-col gap-10">
          <Link type="navbar" to="" name="Home" color="text-black" />
          <Link type="navbar" to="" name="About" color="text-black" />
          <Link type="navbar" to="" name="Products" color="text-black" />
          <Link type="navbar" to="" name="Contacts" color="text-black" />
        </ul>
        <div className="flex gap-5 mt-10">
          <Social icon="bi bi-instagram" link="" />
          <Social icon="bi bi-facebook" link="" />
          <Social icon="bi bi-tiktok" link="" />
        </div>
      </MenuCard>
    </>
  );
};

export default HamburgerMenu;
