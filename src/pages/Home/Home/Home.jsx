import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <Gallery />
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;