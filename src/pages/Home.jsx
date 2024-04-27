import { Nav } from "../components";
import { HomeSectionOne, HomeSectionTwo } from "../sections";





const Home = () => {
    return (
        <>
            <Nav />
            <main className="w-full">
                <div className="relative">
                    <HomeSectionOne />

                    <HomeSectionTwo />

                    
                </div>
            </main>
        </>
    );
};
export default Home;
