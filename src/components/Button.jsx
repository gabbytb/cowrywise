const Button = ({ label, btnType, btnLink, bgColor, textProps }) => {
  return (
    <>
      {
        bgColor &&
          <button href={btnLink} type={btnType} className={`min-h-12 px-8 rounded-md ${bgColor ? `${bgColor} ${textProps}` : ''}`}>
              {label}
          </button>
      }
    </>
  );
};
export default Button;