import { Link } from "react-router-dom"



const ButtonLink = ({ linkURL, label, btnProps, textProps }) => {
  return (
    <>
      {
        btnProps &&
          <Link to={linkURL} className={`flex justify-center items-center rounded-md ${btnProps ? `${btnProps} ${textProps}` : ''}`}>
              {label}
          </Link>
      }
    </>
  )
};

export default ButtonLink;
