import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;