const SmallCards = ({ title, subTitle }) => {
  return (
    <div className="absolute flex">
        <div className="card-item bg-white">
            <h6>{title}</h6>
            <p>{subTitle}</p>
        </div>
    </div>
  );
};
export default SmallCards;