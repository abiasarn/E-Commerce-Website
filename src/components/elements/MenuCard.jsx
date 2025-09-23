const MenuCard = (props) => {
  const { children } = props;

  return (
    <>
      <div className="absolute h-full w-full">
        <div className="absolute z-3 bg-white h-full w-full rounded-2xl p-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
