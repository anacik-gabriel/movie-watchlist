import Featured from "../../Components/Featured";
import NavBar from "../../Components/NavBar";
import Slider from "../../Components/Slider";

const Homepage = () => {
  return (
    <>
      <NavBar />

      <Featured />
      <Slider title="TOP MOVIES" movietype="Top250Movies" />
      <Slider movietype="Top250TVs" title="TOP TVs" />
      <Slider movietype="InTheaters" title="IN THEATERS" />
      <Slider movietype="ComingSoon" title="COMING SOON" />
    </>
  );
};

export default Homepage;
