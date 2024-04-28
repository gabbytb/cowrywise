const Button = ({ label, btnType, btnLink, bgColor, textColor }) => {
  return (
    <>
      {
        bgColor &&
          <button href={btnLink} type={btnType} className={`min-h-12 px-8 text-sm font-semibold ${bgColor ? `${bgColor} ${textColor}` : 'bg-white' }  rounded-md`}>
              {label}
          </button>
      }
    </>
  );
};
export default Button;