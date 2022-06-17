import Featured from "../../Components/Featured";
import NavBar from "../../Components/NavBar";
import SliderO from "../../Components/Slider";

const Homepage = () => {
  return (
    <>
      <NavBar />

      <Featured />

      <SliderO movietype="Top250Movies" title="TOP MOVIES" />
    </>
  );
};

export default Homepage;
