import { Link } from "react-router-dom"



const ButtonLink = ({ linkURL, label }) => {
  return (
    <Link to={linkURL} className="px-4.5 min-h-12 w-258 flex justify-center items-center text-white text-base/17 font-semibold bg-blue-600 rounded-md">
        {label}
    </Link>
  )
}

export default ButtonLink
