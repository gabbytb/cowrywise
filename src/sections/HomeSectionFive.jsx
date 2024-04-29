import { thirdImage } from "../assets/images";




const HomeSectionFive = () => {
  return (
    <section className="section-five">
        <div className="max-container">
            <div className="flex">
                <div className="w-400 ml-68">
                    <div className="relative w-full third-img-wrap">
                        <img src={thirdImage} alt="save online Nigeria cowrywise" />
                    </div>
                </div>
                <div className="flex flex-col max-w-105 p-4">
                    <h2>It only takes 5 minutes</h2>
                    <div>
                        <div>
                            <span></span>
                            <div>
                                <span>Create an account</span>
                                <p>Sign up for an account with your name, email and phone number.</p>
                            </div>
                        </div>
                        <div>
                            <span></span>
                            <div>
                                <span>Add a payment method</span>
                                <p>Using your debit card or a bank transfer, setup your first plan.</p>
                            </div>
                        </div>
                        <div>
                            <span></span>
                            <div>
                                <span>Watch your money grow</span>
                                <p>Sit back, relax & let your money work for you all day, everyday.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HomeSectionFive;
