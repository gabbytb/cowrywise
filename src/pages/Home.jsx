import { Nav } from "../components";
import { HomeSectionOne, HomeSectionTwo, HomeSectionThree, HomeSectionFour, HomeSectionFive, } from "../sections";





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

                    <HomeSectionFive />
                </div>
            </main>
        </>
    );
};
export default Home;
