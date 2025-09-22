const Sponsor = (props) => {
  const { name, logo, link } = props;

  return (
    <>
      <a href={link}>
        <img src={logo} alt={name} className="h-5 sepia-50" />
      </a>
    </>
  );
};

export default Sponsor;
