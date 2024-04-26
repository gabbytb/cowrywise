const Button = ({ label, btnType, btnLink }) => {
  return (
    <button href={btnLink} type={btnType} className="min-h-12 px-7.6 text-white text-base font-semibold bg-blue-600 rounded-md">
        {label}
    </button>
  );
};
export default Button;