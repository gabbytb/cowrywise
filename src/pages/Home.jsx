import { Nav } from "../components";
import { HomeSectionOne, HomeSectionTwo, HomeSectionThree, } from "../sections";





const Home = () => {
    return (
        <>
            <Nav />
            <main className="w-full">
                <div className="relative">
                    <HomeSectionOne />

                    <HomeSectionTwo />

                    <HomeSectionThree />
                </div>
            </main>
        </>
    );
};
export default Home;
