const SlideCard = ({ imgURI, changeSlideImg, slideImg}) => {

    function handleClick() {
        if (slideImg !== imgURI.imgURL) {
            changeSlideImg(imgURI.imgURL)
        }
    }

    return (
        <li className={`flex h-12 w-12 my-15 mr-4 relative ${slideImg === imgURI.imgURL ? 'border-white' : 'border-transparent'} cursor-pointer`} onClick={handleClick}>
            <img src={imgURI.imgURL} className="w-full h-full object-cover" />   
        </li>
    );
}
export default SlideCard;
