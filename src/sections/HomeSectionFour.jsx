import { SliderCards } from "../components";
import { sliderItems } from "../constants";




const HomeSectionFour = () => {
  
    return (
        <section className="section-four pt-50 pb-0 px-0 h-730 relative">
            <div className="max-container">
                <div className="h-42.5 flex">
                    <div className="max-w-105 p-2.5">
                        <h2 className="text-18xl/15.5 -tracking-extratightenest font-firma font-semibold text-sky-950/100 mt-35 mb-34.5">You name it, we’ve figured it out.</h2>
                    </div>
                </div>
            </div>


            <div className="slider-wrapper">
                <div className="slides-wrap">
                    <div className="slides">
                        {
                            sliderItems.map((item) => {
                                return (
                                    <SliderCards key={item.label} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionFour;
