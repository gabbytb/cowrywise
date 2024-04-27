import { ButtonLink } from "../components";
import { SecondImage } from "../assets/images";
// import { sectionTwoCards } from "../constants";






const HomeSectionTwo = () => {
  return (
    <section className="py-50 px-0 h-830 bar-section relative">
        <div className="max-container">
            <div className="grid grid-cols-16 gap-x-10">

                <div className="flex flex-col pt-5">
                    <h2 className="text-11xl/15 font-firma font-semibold text-sky-950/100 tracking-tightest mt-66 mb-2.5 h-42 -ml-0.5 opacity-100 visible">
                        Get a <span className="opacity-100 visible">little </span>&nbsp; richer each day
                    </h2>
                    <h5 className="text-3xl font-medium tracking-tightened text-sky-950/100 mt-6 mb-21 pr-120">One small step today, a giant leap for tomorrow.</h5>
                    <ButtonLink linkURL="https://cowrywise.com/choose-account" label="Start your financial journey" />
                </div>


                <div className="relative">
                    <div className="relative h-48.5 w-720">
                        <SecondImage />
                    </div>
                    
                    <div className="card-items card-item-1 flex opacity-100 w-300">
                        <div className="card-item bg-white border rounded-xl pt-4 pb-6 px-6 w-300">
                            <h6 className="text-12xl/14.8 font-semibold font-poppins tracking-extratighter text-slate-700">Build your savings</h6>
                            <p className="mt-2 mb-0 mx-0 text-sm text-slate-500/75 font-firma">Consistently automate your savings while setting realistic goals.</p>
                        </div>
                    </div>
                    <div className="card-items card-item-2 flex opacity-100 w-300">
                        <div className="card-item bg-white border rounded-xl pt-4 pb-6 px-6 w-300">
                            <h6 className="text-12xl/14.8 font-semibold font-poppins tracking-extratighter text-slate-700">Invest deliberately</h6>
                            <p className="mt-2 mb-0 mx-0 text-sm text-slate-500/75 font-firma">Invest in our diverse range of assets that grow in value over time.</p>
                        </div>
                    </div>
                    <div className="card-items card-item-3 flex opacity-100 w-300">
                        <div className="card-item bg-white border rounded-xl pt-4 pb-6 px-6">
                            <h6 className="text-12xl/14.8 font-semibold font-poppins tracking-extratighter text-slate-700">Stay rich ✨</h6>
                            <p className="mt-2 mb-0 mx-0 text-sm text-slate-500/75 font-firma">Protect your wealth by managing risk, seeking advice and making smart financial decisions.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSectionTwo
