const FooterItem = ({ title, items }) => {
    return (
      <div className="flex flex-col p-20">
        <p className="text-sm font-bold text-red-800 uppercase">{title}</p>
        {items &&
          items.map((value, key) => {
            return (
              <a key={key} className="text-gray-500 select-none hover:underline hover:cursor-pointer">
                {value}
              </a>
            )
          })}
      </div>
    )
  }
  
  export default FooterItem