// import { SelectArrowDown } from "../components"




const HomeSectionThree = () => {
  return (
    <section className="investments-section relative min-h-screen py-50">
        <div className="max-container">

            <div className="text-center">
                <h2 className="text-13xl/60.7 tracking-extratightest font-firma font-bold text-sky-950/100 mt-10 mb-8.5">Stay the course, reap the rewards</h2>
                <div className="flex flex-col justify-center items-center">
                    <h6 className="text-2xl font-normal text-slate-400 font-firma mt-14 mb-19">If you invested</h6>
                    <div className="flex justify-center items-center w-730">
                        <sup className="text-3xl">₦</sup>
                        <input type="tel" inputmode="decimal" value="100,000" className="text-14xl py-2.5 w-494"/>
                    </div>
                    <div className="flex justify-between space-x-10 w-263 text-lg text-blue-400 font-firma">
                        <div>
                            <select>
                                <option value="onetime">Onetime</option>
                                <option value="weekly">Weekly</option>
                                <option selected="selected" value="monthly">Monthly</option>
                            </select>
                        </div>
                        <div className="m-0">
                            <select>
                                <option value="12">Last year</option>
                                <option selected="selected" value="36">3 years ago</option>
                                <option value="60">5 years ago</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="max-w-873 my-0 mx-auto">
                    <div className="relative my-10">
                        <div className="line"></div>
                        <input className="w-full" type="range" min="5000" max="10000000" step="1000" value="100000"></input>
                    </div>
                </div>
                {/* <div className="relative">
                    <div>
                        <h6 className="text-2xl text-slate-400 font-firma font-normal mt-14">Today, you’d have</h6>
                        <p>
                            <sup className="text-slate-400">₦</sup>
                            <span className="">221,713</span>
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  );
};

export default HomeSectionThree;
