import { Link } from "react-router-dom"



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
            <div className="inner-slider-wrapper">
                <div className="slider-items">
                    <Link to="https://cowrywise.com/choose-account" className="slider-item">
                        <h4>Automate and build my savings</h4>
                    </Link>
                    <Link to="https://cowrywise.com/choose-account" className="slider-item">
                        <h4>Diversified long-term investing</h4>
                    </Link>
                    <Link to="https://cowrywise.com/choose-account" className="slider-item">
                        <h4>Get better returns on my money</h4>
                    </Link>
                    <Link to="https://cowrywise.com/choose-account" className="slider-item">
                        <h4>Invest my business’ cash</h4>
                    </Link>
                    <Link to="https://cowrywise.com/choose-account" className="slider-item">
                        <h4>Invest in mutual funds easily</h4>
                    </Link>
                    <Link to="https://cowrywise.com/choose-account" className="slider-item">
                        <h4>Invest with very low fees</h4>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSectionFour
