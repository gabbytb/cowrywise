import { ButtonLink } from "../components";
import { SecondImage } from "../assets/images";







const HomeSectionTwo = () => {

  return (
    <section className="py-50 px-0 h-830 section-two relative">
        <div className="max-container">
            <div className="grid grid-cols-16 gap-x-10">

                <div className="flex flex-col pt-5">
                    <h2 className="text-12xl/15 font-firma font-semibold text-sky-950/100 -tracking-tightest mt-66 mb-2.5 h-42 -ml-0.5 opacity-100 visible">
                        Get a <span className="italic font-light font-sans opacity-100 visible">little</span>&nbsp; richer each day
                    </h2>
                    <h5 className="text-3xl font-medium tracking-tightened text-sky-950/100 mt-6 mb-21 pr-120">One small step today, a giant leap for tomorrow.</h5>
                    <ButtonLink linkURL="https://cowrywise.com/choose-account" label="Start your financial journey" />
                </div>


                <div className="relative">
                    <div className="relative w-720">
                        <SecondImage />
                    </div>
                    
                    <div className="card-items card-item-1">
                        <div className="card-item">
                            <h6 className="card-text">Build your savings</h6>
                            <p className="card-subtext">Consistently automate your savings while setting realistic goals.</p>
                        </div>
                    </div>
                    <div className="card-items card-item-2">
                        <div className="card-item">
                            <h6 className="card-text">Invest deliberately</h6>
                            <p className="card-subtext">Invest in our diverse range of assets that grow in value over time.</p>
                        </div>
                    </div>
                    <div className="card-items card-item-3">
                        <div className="card-item">
                            <h6 className="card-text">Stay rich ✨</h6>
                            <p className="card-subtext">Protect your wealth by managing risk, seeking advice and making smart financial decisions.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSectionTwo
