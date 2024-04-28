import { Nav } from "../components";
import { HomeSectionOne, HomeSectionTwo, HomeSectionThree, HomeSectionFour, } from "../sections";





const Home = () => {
    return (
        <>
            <Nav />
            <main className="w-full">
                <div className="relative">
                    <HomeSectionOne />

                    <HomeSectionTwo />

                    <HomeSectionThree />

                    <HomeSectionFour />


                </div>
            </main>
        </>
    );
};
export default Home;
