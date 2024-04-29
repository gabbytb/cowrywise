import { thirdImage } from "../assets/images";
import { ButtonLink, StepsCard } from "../components";
import { stepsInfo } from "../constants";



const HomeSectionFive = () => {
  return (
    <section className="section-five bg-account bg-no-repeat bg-top-left bg-light-white pt-50 pb-120 px-0">
        <div className="max-container">
            <div className="flex flex-row flex-wrap box-border">
                <div className="w-400 ml-68 p-0">
                    <div className="relative w-full third-img-wrap">
                        <img src={thirdImage} alt="save online Nigeria cowrywise" />
                    </div>
                </div>
                <div className="flex flex-col p-4 new-account-wrap">
                    <h2>It only takes 5 minutes</h2>
                    <div className="new-account-steps">
                        {
                            stepsInfo.map((item) => {
                                return (
                                    <StepsCard key={item.title} {...item} />
                                );
                            })
                        }       
                    </div>
                    <ButtonLink 
                        linkURL="https://cowrywise.com/choose-account" 
                        label="sign up now" 
                        btnProps="block bg-blue-600 w-9.8 min-w-9.8 px-4.6 py-0 h-12 min-h-12" 
                        textProps="text-base text-white font-firma font-semibold capitalize -tracking-extratight" 
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HomeSectionFive;
