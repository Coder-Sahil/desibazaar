
const IconButton = ({ buttonName, iconStyle, clickFunc }) => {
  
  const handleClick = () => {
    clickFunc();
  }

  return (
    // <button className="border-4 border-rose-900 rounded-lg bg-rose-500 text-slate-100">
    <button id={buttonName} onClick={handleClick} className="flex gap-3 p-2 m-1 bg-rose-500 text-slate-100 border-2 rounded-lg font-bold hover:bg-rose-600 ">
      <span className="material-symbols-outlined">{iconStyle}</span>
      {buttonName}
    </button>
  );
}

export default IconButton;
