
const StepsCard = ({ title, subText}) => {
        
    return (
        <div className="flex justify-start items-start mb-50">
            <span className="relative new-account-info"></span>
            <div className="ml-60 max-w-97">
                <span className="text-2xl/none font-semibold font-poppins -tracking-tightener text-dark-blue">{title}</span>
                <p className="text-lg/16.2 font-light mt-15 font-firma text-gray-600 -tracking-extracompressed opacity-8">{subText}</p>
            </div>
        </div>
    );
};

export default StepsCard;
