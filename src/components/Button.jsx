const Button = ({ label, btnType, btnLink }) => {
  return (
    <button href={btnLink} type={btnType} className="min-h-12 px-8 text-white text-sm font-semibold bg-blue-600/100 rounded-md">
        {label}
    </button>
  );
};
export default Button;