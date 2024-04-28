import { Button, ButtonLink, RangeSlider } from "../components";




const HomeSectionThree = () => {
    return (
        <section className="section-three bg-investments bg-no-repeat h-full min-h-dvh flex justify-center items-center py-50 px-0">
            <div className="relative max-container">

                <div className="h-870">
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

                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <h3>Ready to start investing?</h3>
                            <ButtonLink linkURL="https://cowrywise.com/choose-account" label="Get Started" />
                            <Button label="Not yet" bgColor="bg-transparent" textColor="text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSectionThree
