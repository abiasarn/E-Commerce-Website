const Link = (props) => {
  const { to, name, color } = props;
  return (
    <>
      <a href={to} className={`text-base font-normal ${color}`}>
        {name}
      </a>
    </>
  );
};

export default Link;
