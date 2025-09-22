const Social = (props) => {
  const { icon, link } = props;

  return (
    <>
      <a href={link}>
        <div className="border-3 border-gray-100 h-10 w-10 rounded-full flex justify-center items-center">
          <i className={`${icon} text-md`}></i>
        </div>
      </a>
    </>
  );
};

export default Social;
