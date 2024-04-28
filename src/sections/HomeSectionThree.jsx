import { Button, ButtonLink, RangeSlider } from "../components";




const HomeSectionThree = () => {
    return (
        <section className="section-three bg-investments bg-no-repeat h-full min-h-dvh flex justify-center items-center py-50 px-0">
            <div className="max-container">

                <div className="content">
                    <h2 className="text-5xl/tight text-slate-700 -tracking-tighter font-firma font-bold mt-10 mb-34 text-center">Stay the course, reap the rewards</h2>

                    <div className="flex flex-col justify-center items-center">
                        <h6>If you invested</h6>
                        <div className="investment-wrapper flex justify-center items-center">
                            <sup>₦</sup>
                            <input type="tel" inputmode="decimal" value="100,000" />
                        </div>
                        <div className="flex justify-between gap-x-10">
                            <div className="selections-wrap">
                                <select className="select-option">
                                    <option value="onetime">Onetime</option>
                                    <option value="weekly">Weekly</option>
                                    <option selected="selected" value="monthly">Monthly</option>
                                </select>
                            </div>
                            <div className="selections-wrap">
                                <select className="select-option">
                                    <option value="12">Last year</option>
                                    <option selected="selected" value="36">3 years ago</option>
                                    <option value="60">5 years ago</option>
                                </select>
                            </div>
                        </div>
                        <div></div>
                    </div>

                    <div className="max-w-110 m-auto">
                        <div className="my-10">
                            <div></div>
                            <RangeSlider />
                        </div>
                    </div>

                    <div className="relative">
                        {/* first div */}
                        <div className="w-full relative h-42.2 text-currency">
                            <h6 className="text-2xl text-center font-normal text-slate-200">Today, you’d have</h6>    
                            <p className="flex justify-center items-center font-firma my-15">
                                <sup className="text-4xl font-light font-firma -top-1.25 mr-4">₦</sup>
                                <span className="flex justify-center text-16xl font-light">4,434,260</span>
                            </p>
                        </div>
                        {/* first div */}
                        


                        {/* second div */}
                        <div className="roi-wrap">
                            <div>₦834,260 earned in returns on Cowrywise</div>
                            <p>
                                *In a bank, you’d earn <span className="font-semibold">₦28,800</span>
                            </p>
                        </div>
                        {/* second div */}



                        {/* third div */}
                        <div className="flex flex-col justify-center items-center  top-0 bottom-0 left-0 right-0 bg-transparent-white">
                            <h3 className="text-3xl/tight font-bold font-firma text-slate-700 mt-8 mb-7">Ready to start investing?</h3>
                            <ButtonLink 
                                linkURL="https://cowrywise.com/choose-account" 
                                label="Get Started" 
                                btnProps="bg-blue-600 px-4.5"
                                textProps="text-white text-xs/10 font-semibold font-firma"
                            />
                            <Button 
                                label="Not yet" 
                                bgColor="bg-transparent" 
                                textProps="text-blue-500 text-xs -tracking-extratight font-semibold font-firma mt-2.5" 
                            />
                        </div>
                        {/* third div */}
                    </div>

                    <p className="left-0 right-0 w-530 mt-30 mb-0 mx-auto text-slate-400 text-10xl font-poppins text-center -tracking-extratightener">Calculations are based on the average performance of conservative mutual funds on Cowrywise from 2019. Calculation excludes processing fees.</p>
                </div>
            </div>
        </section>
    );
}

export default HomeSectionThree
