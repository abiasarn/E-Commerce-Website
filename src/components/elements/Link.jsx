const Link = (props) => {
  const { type, to, name, color } = props;

  if (type == "navbar") {
    return (
      <>
        <li className="border-b border-gray-300 h-10 p-2 flex items-center">
          <a href={to} className={`text-base font-medium ${color}`}>
            {name}
          </a>
        </li>
      </>
    );
  } else {
    return (
      <>
        <a href={to} className={`text-base font-normal ${color}`}>
          {name}
        </a>
      </>
    );
  }
};

export default Link;
