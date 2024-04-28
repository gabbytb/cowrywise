import { useState } from "react";
import { firstSlide } from "../assets/images";
import { sectionOneSlide } from "../constants";
import { SlideCard, Button } from "../components";




const HomeSectionOne = () => {

    const [slideImg, setSlideImg] = useState(firstSlide); 


    return (
        <section className="py-50 px-0 h-48.5">
            <div className="max-container h-full">
                <div className="grid grid-cols-2 gap-x-20 h-840 py-20">
                    <div className="left-section--one relative">
                        <div className="bg-white relative">
                            <div className="absolute top-0 left-0 h-full w-full">
                                <div className="absolute -top-60 -left-80 bg-pink-100/50 h-850 w-98 -z-1"></div>
                                <div className="relative overflow-hidden h-650 w-520 flex">
                                    <img src={slideImg} alt="first_image" className="w-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <ul className="flex absolute -bottom-100 h-78 w-48">
                            {
                                sectionOneSlide.map((slide) => {
                                    return (
                                        <SlideCard 
                                            key={slide} 
                                            imgURI={slide} 
                                            changeSlideImg={(slide) => setSlideImg(slide)} 
                                            slideImg={slideImg} />
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="right-section--one">
                        <h1 className="text-12xl/16 font-firma font-semibold text-sky-950/100 -tracking-tightest mt-53 mb-5">Put your <br /> money to work</h1>
                        <h6 className="text-5xl/tight h-60 font-firma font-normal text-sky-950/100 -tracking-extratightest mt-4 mb-33.5">Invest wisely. Grow wealth.</h6>
                        <form className="flex flex-1 max-w-98 h-50 font-poppins">
                            <input type="email" required="required" name="email" placeholder="Your email..." className="border border-1 mr-2.5 max-w-99 rounded-md py-6 px-4.4 flex flex-1" /> 
                            <Button btnType="submit" label="Start Investing" btnLink="https://cowrywise.com/choose-account" bgColor="bg-blue-600/100" textColor="text-white" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionOne;
